import React, { useState, useEffect, createContext } from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import ConfirmedCasesPanel from "components/ConfirmedCasesPanel/ConfirmedCasesPanel";
import Map from "components/Map";
import MainContainer from "../components/MainContainer";
import MoreInfoPanel from "../components/MoreInfoPanel";

import mapEffect from "./../utils/mapeffect";
import axios from "axios";

const LOCATION = {
  lat: 20,
  lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

const GlobalData = createContext(null);
const IndexPage = () => {
  const [globalData, setGlobalData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getGlobalData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get("https://corona.lmao.ninja/v2/all");
        setGlobalData(response);
      } catch (e) {
        setIsError(true);
        console.log(
          `Index.js has a problem with getGlobalData: ${e.message}`,
          e
        );
      } finally {
        setIsLoading(false);
      }
    };
    getGlobalData();
  }, []);

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "Mapbox",
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      {isError && (
        <div>Hmmm, something went wrong, try refreshing the page.</div>
      )}
      {!isError && !isLoading && globalData ? (
        <MainContainer>
          <GlobalData.Provider value={globalData}>
            <ConfirmedCasesPanel />
          </GlobalData.Provider>
          <Map {...mapSettings}></Map>
          <MoreInfoPanel />
        </MainContainer>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export { IndexPage as default, GlobalData };
