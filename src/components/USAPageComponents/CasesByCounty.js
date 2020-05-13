import React, { useContext } from "react";

import { USAData } from "./../../pages/usa";

import Tooltip from "./../Tooltip";

const CasesByCounty = () => {
  // Sort the county data by highest total confirmd cases adn return just the top 50 results
  const confirmedCasesTop50 = useContext(USAData)
    .county.sort((a, b) => {
      return b.stats.confirmed - a.stats.confirmed;
    })
    .slice(0, 50);

  return (
    <>
      <h3 className="text-center padding-all-m">
        Confirmed Cases by County <br /> Top 50
      </h3>
      <div className="panel__item-container ">
        {confirmedCasesTop50.map((county, i) => {
          const toolTip = county.county === "New York City" && (
            <Tooltip text="New York City groups the data for New York County (Manhattan), Kings County (Brooklyn), Bronx County (The Bronx), Richmond County (Staten Island), and Queens County (Queens) together " />
          );
          return (
            <div key={county + i} className="panel__item">
              <p className="text-red">
                <strong>{county.stats.confirmed.toLocaleString()}</strong>{" "}
                confirmed
                {toolTip}
              </p>
              <p>{county.county}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CasesByCounty;
