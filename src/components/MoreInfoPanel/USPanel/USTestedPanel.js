import React, { useContext } from "react";

import { Data } from "../../../pages/index";

const USTestedPanel = () => {
  const data = useContext(Data).states;

  data.sort((a, b) => {
    return b.tests - a.tests;
  });

  let totalTests = 0;

  data.forEach((state) => {
    totalTests += state.tests;
  });

  return (
    <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
      <h3>Total Tests in US</h3>
      <h2>{totalTests.toLocaleString()}</h2>
      <div>
        {data.map((state, i) => {
          return (
            <div key={state.state + i}>
              <p>{state.tests} tested</p>
              <p>{state.state}, US</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default USTestedPanel;
