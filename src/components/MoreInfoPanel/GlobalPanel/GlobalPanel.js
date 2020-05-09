import React from "react";
import ClickThroughPanel from "../../ClickThroughPanel/ClickThroughPanel";
import GlobalDeathsPanel from "./GlobalDeathsPanel";
import GlobalRecovered from "./GlobalRecoveredPanel";

const GlobalPanel = () => {
  return (
    <ClickThroughPanel>
      <GlobalDeathsPanel title="Global Deaths" />
      <GlobalRecovered title="Global Recovered" />
    </ClickThroughPanel>
  );
};

export default GlobalPanel;
