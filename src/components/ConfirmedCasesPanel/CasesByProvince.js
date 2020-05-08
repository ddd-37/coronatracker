import React, { useContext } from "react";
import { Data } from "../../pages";

const CasesByCountry = () => {
  const data = useContext(Data);

  let totalConfirmed = (
    <section>
      <div>Confirmed Cases by Province/State/Dependency</div>
      <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
        {data.province.map((data, i) => {
          // Some countries don't provide data by province or county, we'll omit those for now
          if (!data.province) {
            return false;
          }

          return (
            <div key={i} style={{ borderBottom: "1px solid #f4f4f4" }}>
              <p>
                <strong>{data.stats.confirmed.toLocaleString()}</strong>{" "}
                confirmed
              </p>
              <p>
                <strong>{data.province}</strong>, {data.country}
              </p>
            </div>
          );
        })}
      </div>
      <div></div>
    </section>
  );

  return totalConfirmed;
};

export default CasesByCountry;
