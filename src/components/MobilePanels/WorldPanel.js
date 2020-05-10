import React, { useContext } from "react";
import { Data } from "./../../pages/index";

const WorldPanel = () => {
  const countryData = useContext(Data).country;

  return (
    <>
      <h4>Confirmed Cases by Country/Region (deaths)</h4>
      <div className="panel__item-container">
        {countryData.map((country, i) => {
          return (
            <div key={country + i} className="panel__item">
              <span className="text-red">{country.cases} </span>{" "}
              {country.country} ({country.deaths})
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorldPanel;
