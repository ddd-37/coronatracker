import React, { useContext } from "react";
import { Data } from "../../pages/index";

const USPanel = () => {
  const totalConfirmed = useContext(Data).global;
  console.log("USPanel -> totalConfirmed", totalConfirmed);
  const stateData = useContext(Data).states;

  stateData.sort((a, b) => {
    if (a.state < b.state) {
      return -1;
    }
    if (a.state > b.state) {
      return 1;
    }
    return 0;
  });
  console.log("USPanel -> data", stateData);

  return (
    <>
      <h4>US Case Statistics</h4>
      <div className="panel__item-container">
        {stateData.map((state) => {
          return (
            <div key={state.state} className="panel__item">
              <h4>{state.state}</h4>
              <ul>
                <li>
                  Total Active: <span className="text-red">{state.cases}</span>
                </li>
                <li>
                  Active Cases:{" "}
                  <span className="text-green">{state.active}</span>
                </li>
                <li>Total Deaths: {state.deaths}</li>
                <li>
                  Tests/Million:{" "}
                  <span className="text-blue">{state.testsPerOneMillion}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default USPanel;
