import React, { useContext } from "react";
import { Data } from "../../../pages";

const GlobalRecovered = () => {
  const totalRecovered = useContext(Data).global.recovered;

  const countryData = useContext(Data).country;
  countryData.sort((a, b) => {
    return b.recovered - a.recovered;
  });

  return (
    <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
      <h3>Global Recovered</h3>
      <h2>{totalRecovered.toLocaleString()}</h2>
      {countryData.map((country, i) => {
        // Some countries don't have data on the recovered, we can just omit for now
        if (country.recovered === 0) {
          return false;
        }
        return (
          <div key={country + i}>
            <p>
              <strong>{country.recovered.toLocaleString()}</strong> recovered
            </p>
            <p>{country.country}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GlobalRecovered;
