import React, { useContext } from "react";
import { Data } from "./../../pages/index";

const TotalsPanel = () => {
  const { cases, deaths, recovered, todayCases } = useContext(Data).global;

  return (
    <div className="totalPanel text-center">
      <div className="totalPanel__item">
        <h3>Total Confirmed</h3>
        <h2 className="text-red">{cases.toLocaleString()}</h2>
      </div>
      <div className="totalPanel__item">
        <h3>Total Deaths</h3>
        <h2>{deaths.toLocaleString()}</h2>
      </div>
      <div className="totalPanel__item">
        <h3>Total Recovered</h3>
        <h2 className="text-green">{recovered.toLocaleString()}</h2>
      </div>
      <div className="totalPanel__item">
        <h3>Cases Confirmed Today</h3>
        <h2 className="text-blue">{todayCases.toLocaleString()}</h2>
      </div>
    </div>
  );
};

export default TotalsPanel;
