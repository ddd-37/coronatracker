import React, { useContext } from "react";

import { USAData } from "./../../pages/usa";

const CasesPer1000 = () => {
  // Sort the county data by highest total confirmd cases adn return just the top 50 results
  const confirmedCasesTop50 = useContext(USAData)
    .county.sort((a, b) => {
      return b.stats.confirmed - a.stats.confirmed;
    })
    .slice(0, 50);

  return (
    <>
      <h4 className="text-center">
        Top 50 Confirmed Cases
        <br />
        by County
      </h4>
      <div className="panel__item-container ">
        {confirmedCasesTop50.map((county, i) => {
          return (
            <div key={county + i} className="panel__item">
              <p className="text-red">
                <strong>{county.stats.confirmed.toLocaleString()}</strong>{" "}
                confirmed
              </p>
              <p>{county.county}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CasesPer1000;
