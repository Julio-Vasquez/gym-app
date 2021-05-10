import React from "react";
import PropTypes from "prop-types";

export const ByDates = ({ identification }) => <div>{identification}</div>;

ByDates.propTypes = {
  identification: PropTypes.string.isRequired,
};
