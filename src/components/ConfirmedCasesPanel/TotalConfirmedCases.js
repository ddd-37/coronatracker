import React from "react";

const TotalConfirmedCases = ({ totalCases }) => {
  const totalConfirmed = (
    <div>
      <h3>Total Confirmed</h3>
      <h2>
        <strong>{totalCases.toLocaleString()}</strong>
      </h2>
    </div>
  );

  return totalConfirmed;
};

export default TotalConfirmedCases;
