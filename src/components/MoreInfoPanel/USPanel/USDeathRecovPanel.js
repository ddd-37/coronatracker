import React, { useContext } from "react";

import { Data } from "../../../pages/index";

const USDeathRecovPanel = () => {
  const data = useContext(Data).states;

  return (
    <div>
      <div className="panel__header">
        <h4>US State level</h4>
        <h3>
          <strong>
            <span className="text-red">Deaths</span> /
            <span className="text-green"> Recovered</span>
          </strong>
        </h3>
      </div>
      <div className="panel__item-contianer">
        {data.map((state, i) => {
          const recovered = state.cases - state.deaths - state.active;
          return (
            <div key={state + i} className="panel__item">
              <p>
                <span className="text-red">
                  {state.deaths.toLocaleString()}
                </span>{" "}
                /
                <span className="text-green">
                  {" "}
                  <strong>{recovered.toLocaleString()}</strong>
                </span>
              </p>
              <p>{state.state}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default USDeathRecovPanel;
