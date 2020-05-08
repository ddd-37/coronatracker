import React from "react";
import { PropTypes } from "prop-types";

const ClickThroughPanel = ({ children }) => {
  console.log("ClickThroughPanel -> children", children);
  const panels = children.map((panel) => {
    return <div>{panel}</div>;
  });
  return <div>{panels}</div>;
};

ClickThroughPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
export default ClickThroughPanel;
