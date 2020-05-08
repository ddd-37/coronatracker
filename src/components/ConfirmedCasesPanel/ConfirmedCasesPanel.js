import React from "react";

import ClickThroughPanel from "./../ClickThroughPanel/ClickThroughPanel";
import TotalConfirmedCases from "./TotalConfirmedCases";
import CasesByCountry from "./CasesByCountry";
import CasesByProvince from "./CasesByProvince";

const ConfirmedCasesPanel = () => {
  return (
    <>
      <TotalConfirmedCases />
      <ClickThroughPanel>
        <CasesByCountry title={"Country"} />
        <CasesByProvince title={"Region"} />
      </ClickThroughPanel>
    </>
  );
};

export default ConfirmedCasesPanel;
