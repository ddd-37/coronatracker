import React, { useContext } from "react";

import { Data } from "../../../pages/index";

const USHospitalizationPanel = () => {
  const data = useContext(Data).states;
  console.log("USHospitalizationPanel -> data", data);

  return <div></div>;
};

export default USHospitalizationPanel;
