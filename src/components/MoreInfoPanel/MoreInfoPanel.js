import React from "react";
import GlobalPanel from "./GlobalPanel/GlobalPanel";
import USPanel from "./USPanel/USPanel";

const MoreInfoPanel = () => {
  return (
    <section>
      <div>
        <GlobalPanel />
        <USPanel />
      </div>
      <div></div>
    </section>
  );
};

export default MoreInfoPanel;
