import React, { useContext } from "react";
import { USAData } from "./../../pages/usa";
import Tooltip from "./../Tooltip";

const DeathsByCounty = () => {
  const deaths = useContext(USAData)
    .county.sort((a, b) => {
      return b.stats.deaths - a.stats.deaths;
    })
    .slice(0, 50);

  return (
    <>
      <h3 className="text-center padding-all-m">
        Deaths by County <br /> Top 50
      </h3>
      <div className="panel__item-container">
        {deaths.map((county, i) => {
          const toolTip = county.county === "New York City" && (
            <Tooltip text="New York City groups the data for New York County (Manhattan), Kings County (Brooklyn), Bronx County (The Bronx), Richmond County (Staten Island), and Queens County (Queens) together " />
          );
          return (
            <div key={county.county + i} className="panel__item">
              <p>
                <strong>{county.stats.deaths.toLocaleString()}</strong>{" "}
                {county.county}
                {toolTip}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DeathsByCounty;
