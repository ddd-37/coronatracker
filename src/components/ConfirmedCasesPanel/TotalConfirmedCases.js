import React from "react";

const TotalConfirmedCases = ({ totalCases }) => {
  const totalConfirmed = (
    <div className="panel text-center">
      <h3>Total Confirmed</h3>
      <h2 className="text-red">
        <strong>{totalCases.toLocaleString()}</strong>
      </h2>
    </div>
  );

  return totalConfirmed;
};

export default TotalConfirmedCases;
