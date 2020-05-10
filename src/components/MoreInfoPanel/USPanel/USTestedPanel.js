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
    <>
      <div className="panel__header text-center">
        <h3>Total Tests in US</h3>
        <h2 className="text-blue">{totalTests.toLocaleString()}</h2>
      </div>
      <div className="panel__item-container">
        {data.map((state, i) => {
          return (
            <div key={state.state + i} className="panel__item">
              <p>
                <strong className="text-blue">{state.tests}</strong> tested
              </p>
              <p>{state.state}, US</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default USTestedPanel;
