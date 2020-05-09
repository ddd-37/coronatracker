import React, { useContext } from "react";

import { Data } from "../../../pages/index";

const USDeathRecovPanel = () => {
  const data = useContext(Data).states;
  console.log("USDeathRecovPanel -> data", data);

  return <div></div>;
};

export default USDeathRecovPanel;
