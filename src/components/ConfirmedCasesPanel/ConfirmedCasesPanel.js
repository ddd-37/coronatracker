import React, { useContext } from "react";

import { Data } from "./../../pages/index";

import ClickThroughPanel from "./../ClickThroughPanel/ClickThroughPanel";
import TotalConfirmedCases from "./TotalConfirmedCases";
import CasesByCountry from "./CasesByCountry";
import CasesByProvince from "./CasesByProvince";

const ConfirmedCasesPanel = () => {
  const data = useContext(Data);

  return (
    <>
      <TotalConfirmedCases totalCases={data.global.cases} />
      <ClickThroughPanel>
        {/*The title prop in the components below is used to genereate the  button tabs*/}

        <CasesByCountry title={"Country"} />
        <CasesByProvince title={"Region"} />
      </ClickThroughPanel>
    </>
  );
};

export default ConfirmedCasesPanel;
