import React, { useState, useEffect } from "react";
import axios from "axios";

const CasesByCountry = () => {
  const [isLoading, setLoading] = useState(false);
  const [casesByProvince, setCasesByProvince] = useState([]);

  useEffect(() => {
    async function getConfirmedCases() {
      let response;

      setLoading(true);
      try {
        response = await axios.get("https://disease.sh/v2/jhucsse");

        response.data.sort((a, b) => {
          return b.stats.confirmed - a.stats.confirmed;
        });
        setCasesByProvince(response.data);
      } catch (e) {
        console.log(`Failed to fetch all confirmed cases: ${e.message}`, e);
        return;
      } finally {
        setLoading(false);
      }
    }

    getConfirmedCases();
  }, []);

  let totalConfirmed =
    isLoading && casesByProvince !== undefined ? (
      <span>Loading...</span>
    ) : (
      <section>
        {" "}
        <div>Confirmed Cases by Province/State/Dependency</div>
        <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
          {casesByProvince.map((data, i) => {
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
