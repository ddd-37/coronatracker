import React, { useState, useEffect, createContext } from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";

import Map from "components/Map";
import MainContainer from "../components/MainContainer";

import usaMapEffect from "./../utils/usaMapEffect";
import axios from "axios";
import ClickThroughPanel from "../components/ClickThroughPanel/ClickThroughPanel";

import CasesByCounty from "../components/USAPageComponents/CasesByCounty";
import DeathsByCounty from "../components/USAPageComponents/DeathsByCounty";

const USAData = createContext(null);

const USAPage = () => {
  const [countyData, setCountyData] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Since the window object isn't available to use when we build, we can go ahead and find the device width in useEffect
  const [windowWidth, setWindowWidth] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          "https://disease.sh/v2/jhucsse/counties"
        );
        setCountyData(response);
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

  const mapEffect = usaMapEffect;
  const LOCATION = {
    lat: 40,
    lng: -95,
  };
  const CENTER = [LOCATION.lat, LOCATION.lng];
  const DEFAULT_ZOOM = isMobile ? 2 : 5;

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
      {!isError && !isLoading && countyData ? (
        <USAData.Provider value={{}}>
          {isMobile ? (
            <ClickThroughPanel>
              <Map title="Map" {...mapSettings}></Map>
              <CasesByCounty title="Cases" />
              <DeathsByCounty title="Deaths" />
            </ClickThroughPanel>
          ) : (
            <MainContainer>
              <CasesByCounty title="Cases" />
              <Map {...mapSettings}></Map>
              <DeathsByCounty title="Deaths" />
            </MainContainer>
          )}
        </USAData.Provider>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export { USAPage as default, USAData };