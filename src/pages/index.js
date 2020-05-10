import React, { useState, useEffect, createContext } from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import ConfirmedCasesPanel from "components/ConfirmedCasesPanel/ConfirmedCasesPanel";
import Map from "components/Map";
import MainContainer from "../components/MainContainer";
import MoreInfoPanel from "../components/MoreInfoPanel/MoreInfoPanel";

import mapEffect from "./../utils/mapeffect";
import axios from "axios";
import ClickThroughPanel from "../components/ClickThroughPanel/ClickThroughPanel";
import TotalsPanel from "../components/MobilePanels/TotalsPanel";
import WorldPanel from "../components/MobilePanels/WorldPanel";
import USTotalsPanel from "../components/MobilePanels/USTotalsPanel";

const Data = createContext(null);

const IndexPage = () => {
  const [globalData, setGlobalData] = useState(false);
  const [countryData, setCountryData] = useState(false);
  const [provinceData, setProvinceData] = useState(false);
  const [statesData, setStatesData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const responseGlobalData = await axios.get(
          "https://corona.lmao.ninja/v2/all"
        );
        setGlobalData(responseGlobalData.data);

        const responseCountryData = await axios.get(
          "https://corona.lmao.ninja/v2/countries"
        );

        responseCountryData.data.sort((a, b) => {
          return b.cases - a.cases;
        });

        setCountryData(responseCountryData.data);

        const responseProvinceData = await axios.get(
          "https://disease.sh/v2/jhucsse"
        );
        responseProvinceData.data.sort((a, b) => {
          return b.stats.confirmed - a.stats.confirmed;
        });

        setProvinceData(responseProvinceData.data);

        const responseStatesData = await axios.get(
          "https://corona.lmao.ninja/v2/states"
        );

        setStatesData(responseStatesData.data);
      } catch (e) {
        setIsError(true);
        console.log(`Index.js has a problem with getData: ${e.message}`, e);
      } finally {
        setWindowWidth(window.innerWidth);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const isMobile = windowWidth < 856;

  const LOCATION = {
    lat: 20,
    lng: -20,
  };
  const CENTER = [LOCATION.lat, LOCATION.lng];
  const DEFAULT_ZOOM = isMobile ? 1 : 2.5;

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "Mapbox",
    zoom: DEFAULT_ZOOM,
    noWrap: true,
    mapEffect,
  };

  const title = process.env.GATSBY_TITLE;
  return (
    <Layout pageName="home">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {isError && (
        <div>Hmmm, something went wrong, try refreshing the page.</div>
      )}
      {!isError && !isLoading && globalData ? (
        <Data.Provider
          value={{
            global: globalData,
            country: countryData,
            province: provinceData,
            states: statesData,
          }}
        >
          {isMobile ? (
            <ClickThroughPanel>
              <Map title="Map" {...mapSettings}></Map>
              <TotalsPanel title="Totals" />
              <WorldPanel title="World" />
              <USTotalsPanel title="US" />
            </ClickThroughPanel>
          ) : (
            <MainContainer>
              <ConfirmedCasesPanel />
              <Map {...mapSettings}></Map>
              <MoreInfoPanel />
            </MainContainer>
          )}
        </Data.Provider>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export { IndexPage as default, Data };
