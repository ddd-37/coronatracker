import React from "react";

import ClickThroughPanel from "../../ClickThroughPanel/ClickThroughPanel";
import USDeathRecovPanel from "./USDeathRecovPanel";
import USTestedPanel from "./USTestedPanel";
import USHospitalizationPanel from "./USHospitalizationPanel";

const USPanel = () => {
  return (
    <ClickThroughPanel>
      <USDeathRecovPanel />
      <USTestedPanel />
      <USHospitalizationPanel />
    </ClickThroughPanel>
  );
};

export default USPanel;
