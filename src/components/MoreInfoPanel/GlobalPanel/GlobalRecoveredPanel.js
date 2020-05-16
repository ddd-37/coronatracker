import React, { useContext } from "react";
import { Data } from "../../../pages";

const GlobalRecovered = () => {
  const totalRecovered = useContext(Data).global.recovered;

  const countryData = useContext(Data).country;
  countryData.sort((a, b) => {
    return b.recovered - a.recovered;
  });

  return (
    <>
      <div className="text-center">
        <h3>Global Recovered</h3>
        <h2 className="text-green">{totalRecovered.toLocaleString()}</h2>
      </div>
      <div className="panel__item-container">
        {countryData.map((country, i) => {
          // Some countries don't have data on the recovered, we can just omit for now
          if (!country.recovered) {
            return false;
          }
          return (
            <div key={country + i} className="panel__item">
              <p>
                <strong className="text-green">
                  {country.recovered.toLocaleString()}
                </strong>{" "}
                recovered
              </p>
              <p>{country.country}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GlobalRecovered;
