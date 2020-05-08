import React, { useContext } from "react";

import { GlobalData } from "./../../pages/index";

import ClickThroughPanel from "./../ClickThroughPanel/ClickThroughPanel";
import TotalConfirmedCases from "./TotalConfirmedCases";
import CasesByCountry from "./CasesByCountry";
import CasesByProvince from "./CasesByProvince";

const ConfirmedCasesPanel = ({ isLoading }) => {
  const { data } = useContext(GlobalData);
  console.log("ConfirmedCasesPanel -> data", data.cases);

  return (
    <>
      <TotalConfirmedCases totalCases={data.cases} />
      <ClickThroughPanel>
        {/*The title prop in the components below is used to genereate the  button tabs*/}

        <CasesByCountry title={"Country"} />
        <CasesByProvince title={"Region"} />
      </ClickThroughPanel>
    </>
  );
};

export default ConfirmedCasesPanel;
