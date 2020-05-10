import React, { useContext } from "react";
import { Data } from "./../../pages/index";

const TotalsPanel = () => {
  const { cases, deaths, recovered, todayCases } = useContext(Data).global;
  console.log("WorldPanel -> data", useContext(Data));
  return (
    <div className="totalPanel text-center">
      <div className="totalPanel__item">
        <h3>Total Confirmed</h3>
        <h2 className="text-red">{cases}</h2>
      </div>
      <div className="totalPanel__item">
        <h3>Total Deaths</h3>
        <h2>{deaths}</h2>
      </div>
      <div className="totalPanel__item">
        <h3>Total Recovered</h3>
        <h2 className="text-green">{recovered}</h2>
      </div>
      <div className="totalPanel__item">
        <h3>Cases Confirmed Today</h3>
        <h2 className="text-blue">{todayCases}</h2>
      </div>
    </div>
  );
};

export default TotalsPanel;
