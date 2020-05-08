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
        {/*The title prop in the components below is used to genereate the  button tabs*/}

        <CasesByCountry title={"Country"} />
        <CasesByProvince title={"Region"} />
      </ClickThroughPanel>
    </>
  );
};

export default ConfirmedCasesPanel;
