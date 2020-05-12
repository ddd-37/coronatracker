import React, { useContext } from "react";
import { Data } from "../../pages/index";

const USPanel = () => {
  const totalConfirmed = useContext(Data).global;
  const stateData = useContext(Data).states;

  // Sort alphabetically
  stateData.sort((a, b) => {
    if (a.state < b.state) {
      return -1;
    }
    if (a.state > b.state) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <h2 className="text-center">US Case Statistics</h2>
      <div className="panel__item-container ">
        {stateData.map((state) => {
          return (
            <div key={state.state} className="panel__item text-center">
              <h3>
                <strong>{state.state}</strong>
              </h3>
              <div className="flex-row">
                <div className="flex-column">
                  <div>
                    <h3># Cases to Date</h3>
                    <h2 className="text-red">{state.cases.toLocaleString()}</h2>
                  </div>
                  <div>
                    <h5>Tests/Million</h5>
                    <h2 className="text-blue">
                      {state.testsPerOneMillion.toLocaleString()}
                    </h2>
                  </div>
                </div>
                <div className="flex-column">
                  <div>
                    <h5>Active Cases</h5>
                    <h2 className="text-green">
                      {state.active.toLocaleString()}
                    </h2>
                  </div>
                  <div>
                    <h5>Total Deaths</h5>{" "}
                    <h2>{state.deaths.toLocaleString()}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default USPanel;
