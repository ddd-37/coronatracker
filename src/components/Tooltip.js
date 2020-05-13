import React from "react";
import { PropTypes } from "prop-types";
import { FaQuestionCircle } from "react-icons/fa";

const Tooltip = ({ text }) => {
  return (
    <span title={text} style={{ margin: "0 0 0 .5rem", cursor: "pointer" }}>
      <FaQuestionCircle />
    </span>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tooltip;
