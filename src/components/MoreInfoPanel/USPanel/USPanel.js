import React from "react";

import ClickThroughPanel from "../../ClickThroughPanel/ClickThroughPanel";
import USDeathRecovPanel from "./USDeathRecovPanel";
import USTestedPanel from "./USTestedPanel";

const USPanel = () => {
  return (
    <ClickThroughPanel>
      <USDeathRecovPanel title="Deaths / Recovered" />
      <USTestedPanel title="Test Results" />
    </ClickThroughPanel>
  );
};

export default USPanel;
