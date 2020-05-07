import React from "react";
import TotalConfirmedCases from "./TotalConfirmedCases";
import CasesByArea from "./CasesByArea";

const ConfirmedCasesPanel = () => {
  return (
    <div>
      <TotalConfirmedCases />
      <CasesByArea />
    </div>
  );
};

export default ConfirmedCasesPanel;
