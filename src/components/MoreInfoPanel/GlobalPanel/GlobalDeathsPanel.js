import React, { useContext } from "react";
import { Data } from "../../../pages";

const GlobalDeathsPanel = () => {
  const totalDeaths = useContext(Data).global.deaths;
  const countryData = useContext(Data).country;
  countryData.sort((a, b) => {
    return b.deaths - a.deaths;
  });

  return (
    <>
      <div className="text-center">
        <h3>Global Deaths</h3>
        <h2 className="text-red">{totalDeaths.toLocaleString()}</h2>
      </div>
      <div className="panel__item-container">
        {countryData.map((country, i) => {
          return (
            <div key={country + i} className="panel__item">
              <p>
                <strong className="text-red">
                  {country.deaths.toLocaleString()}
                </strong>{" "}
                deaths
              </p>
              <p>{country.country}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GlobalDeathsPanel;
