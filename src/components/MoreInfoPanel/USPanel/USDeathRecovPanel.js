import React, { useContext } from "react";

import { Data } from "../../../pages/index";

const USDeathRecovPanel = () => {
  const data = useContext(Data).states;
  console.log("USDeathRecovPanel -> data", data);

  return (
    <div>
      <h3>US State level</h3>
      <h4>
        <strong>
          <span style={{ color: "red" }}>Deaths</span> /
          <span style={{ color: "green" }}> Recovered</span>
        </strong>
      </h4>
      <div>
        {data.map((state, i) => {
          const recovered = state.cases - state.deaths - state.active;
          return (
            <div key={state + i}>
              <p>
                <span style={{ color: "red" }}>
                  {state.deaths.toLocaleString()}
                </span>{" "}
                /
                <span style={{ color: "green" }}>
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
