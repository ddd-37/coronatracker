import React from "react";
import GlobalPanel from "./GlobalPanel/GlobalPanel";
import USPanel from "./USPanel/USPanel";

const MoreInfoPanel = () => {
  return (
    <section className="moreInfoPanel">
      <GlobalPanel />
      <USPanel />
    </section>
  );
};

export default MoreInfoPanel;
