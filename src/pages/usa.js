import React, { useState, useEffect, useContext } from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Map from "components/Map";
import MainContainer from "../components/MainContainer";
import MoreInfoPanel from "../components/MoreInfoPanel/MoreInfoPanel";

import usaMapEffect from "../utils/usaMapEffect";
import axios from "axios";
import ClickThroughPanel from "../components/ClickThroughPanel/ClickThroughPanel";
import { Data } from ".";

const USAPage = () => {
  // Since the window object isn't available to use when we build, we can go ahead and find the device width in useEffect
  const [windowWidth, setWindowWidth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
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
  const DEFAULT_ZOOM = isMobile ? 2 : 2.5;

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "Mapbox",
    zoom: DEFAULT_ZOOM,
    noWrap: true,
    usaMapEffect,
  };

  const title = process.env.GATSBY_TITLE;
  return (
    <Layout pageName="usa">
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </Layout>
  );
};

export { USAPage as default };
