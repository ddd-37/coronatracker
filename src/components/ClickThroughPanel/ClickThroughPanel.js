import React, { useState } from "react";
import { PropTypes } from "prop-types";

const ClickThroughPanel = ({ children }) => {
  // We'll set the active to children[0] on render
  const [activePanel, setActivePanel] = useState(0);

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
      <div className="panel" key={panel.props.title + i} style={display}>
        {panel}
      </div>
    );
  });

  return (
    <div className="clickThroughPanel">
      {panels}
      <div>{buttons}</div>
    </div>
  );
};

ClickThroughPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
export default ClickThroughPanel;
