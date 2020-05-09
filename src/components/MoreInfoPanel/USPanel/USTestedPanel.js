import React, { useContext } from "react";

import Data from "../../../pages/index";

const USTestedPanel = () => {
  const data = useContext(Data).states;
  console.log("USTestedPanel -> data", data);

  return <div></div>;
};

export default USTestedPanel;
