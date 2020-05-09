import React, { useContext } from "react";

import { Data } from "../../../pages/index";

const USDeathRecovPanel = () => {
  const data = useContext(Data).states;

  return (
    <div>
      <h3>US State level</h3>
      <h4>
        <strong>
          <span className="text-red">Deaths</span> /
          <span className="text-green"> Recovered</span>
        </strong>
      </h4>
      <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
        {data.map((state, i) => {
          const recovered = state.cases - state.deaths - state.active;
          return (
            <div key={state + i}>
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
