import React, { useContext } from "react";
import { Data } from "../../../pages";

const GlobalDeathsPanel = () => {
  const totalDeaths = useContext(Data).global.deaths;
  const countryData = useContext(Data).country;
  countryData.sort((a, b) => {
    return b.deaths - a.deaths;
  });

  return (
    <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
      <h3>Global Deaths</h3>
      <h2>{totalDeaths.toLocaleString()}</h2>
      {countryData.map((country, i) => {
        return (
          <div key={country + i}>
            <p>
              <strong>{country.deaths.toLocaleString()}</strong> dead
            </p>
            <p>{country.country}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GlobalDeathsPanel;
