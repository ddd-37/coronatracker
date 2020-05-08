import React, { useContext } from "react";
import { Data } from "../../pages";

const CasesByArea = () => {
  const data = useContext(Data);

  let totalConfirmed = (
    <section>
      <div>Confirmed Cases by Country/Region/Sovereignty</div>
      <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
        {data.country.map((data) => {
          return (
            <div
              key={data.country}
              style={{ borderBottom: "1px solid #f4f4f4" }}
            >
              <span>
                <strong>{data.cases}</strong> {data.country}
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
