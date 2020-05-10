import React from "react";
import { PropTypes } from "prop-types";

//Todo - fix class names
const MainContainer = ({ children }) => {
  return (
    <div className="mainContainer">
      <div className="main__panel" id="main__1">
        {children[0]}
      </div>
      <div className="main__panel" id="main__2">
        {children[1]}
      </div>
      <div className="main__panel" id="main__3">
        {children[2]}
      </div>
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.arrayOf(function (propValue) {
    if (propValue.length !== 3 && PropTypes.elementType) {
      // ToDo - take a look at this
      return new Error(
        "TriPanelContainer needs to have 3 children passed to it"
      );
    }
  }),
};

export default MainContainer;
