import React, { useState } from "react";
import { PropTypes } from "prop-types";

const ClickThroughPanel = ({ children }) => {
  console.log("ClickThroughPanel -> children", children);
  // We'll set the active to children[0] on render
  const [activePanel, setActivePanel] = useState(0);
  console.log("ClickThroughPanel -> activePanel", activePanel);
  let buttons = [];

  const panels = children.map((panel, i) => {
    // Hide all panels after the first
    let display = { display: "none" };
    if (i === activePanel) {
      display = { display: "block" };
    }

    buttons.push(
      <button
        key={`btn-${i}`}
        onClick={() => setActivePanel(i)}
        className="clickThrough__btn"
      >
        {panel.props.title}
      </button>
    );

    return (
      <div key={panel.props.title} style={display}>
        {panel}
      </div>
    );
  });

  return (
    <div className="clickThroughPanel">
      <div>{panels}</div>
      <div>{buttons}</div>
    </div>
  );
};

ClickThroughPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
export default ClickThroughPanel;
