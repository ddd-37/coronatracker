import React from "react";
import { PropTypes } from "prop-types";

const TriPanelContainer = ({ children }) => {
  return (
    <div className="TriPanelContainer">
      <div className="TriPanel__Panel" id="TriPanel__1">
        {children[0]}
      </div>
      <div className="TriPanel__Panel" id="TriPanel__2">
        {children[1]}
      </div>
      <div className="TriPanel__Panel" id="TriPanel__3">
        {children[2]}
      </div>
    </div>
  );
};

TriPanelContainer.propTypes = {
  children: PropTypes.arrayOf(function (
    propValue,
    key,
    componentName,
    location,
    propFullName
  ) {
    console.log(propValue.length !== 3);
    if (propValue.length !== 3) {
      return new Error(
        "TriPanelContainer needs to have 3 children passed to it"
      );
    }
  }),
};

export default TriPanelContainer;
