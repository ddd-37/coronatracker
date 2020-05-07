import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import ConfirmedCasesPanel from "components/ConfirmedCasesPanel/ConfirmedCasesPanel";
import Map from "components/Map";
import TriPanelContainer from "../components/TriPanelContainer";
import MoreInfoPanel from "../components/MoreInfoPanel";

import mapEffect from "./../utils/mapeffect";

const LOCATION = {
  lat: 20,
  lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

const IndexPage = () => {
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
      <TriPanelContainer>
        <ConfirmedCasesPanel />
        <Map {...mapSettings}></Map>
        <MoreInfoPanel />
      </TriPanelContainer>
    </Layout>
  );
};

export default IndexPage;
