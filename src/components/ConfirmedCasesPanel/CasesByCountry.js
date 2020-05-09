import React, { useContext } from "react";
import { Data } from "../../pages";

const CasesByArea = () => {
  const data = useContext(Data).country;

  let totalConfirmed = (
    <section>
      <div className="panel__header text-center">
        <h3>Confirmed Cases by Country/Region/Sovereignty</h3>
      </div>
      <div className="panel__item-contianer">
        {data.map((data) => {
          return (
            <div className="panel__item" key={data.country}>
              <span>
                <strong className="text-red">
                  {data.cases.toLocaleString()}
                </strong>{" "}
                {data.country}
              </span>
            </div>
          );
        })}
      </div>
      <div></div>
    </section>
  );

  return totalConfirmed;
};

export default CasesByArea;
