import React, { useContext } from "react";
import { Data } from "../../pages";

const CasesByCountry = () => {
  const data = useContext(Data).province;

  let totalConfirmed = (
    <section>
      <div className="panel__header text-center">
        <h3>Confirmed Cases by Province/State/Dependency</h3>
      </div>
      <div className="panel__item-contianer">
        {data.map((data, i) => {
          // Some countries don't provide data by province or county, we'll omit those for now
          if (!data.province) {
            return false;
          }

          return (
            <div key={i} className="panel__item">
              <p className="text-red">
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
