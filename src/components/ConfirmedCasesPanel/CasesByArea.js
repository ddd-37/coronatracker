import React, { useState, useEffect } from "react";
import axios from "axios";

const CasesByArea = () => {
  const [isLoading, setLoading] = useState(false);
  const [confirmedCasesByCountry, setConfirmedCasesByCountry] = useState([]);

  useEffect(() => {
    async function getConfirmedCases() {
      let response;
      setLoading(true);
      try {
        response = await axios.get("https://corona.lmao.ninja/v2/countries");

        response.data.sort((a, b) => {
          return b.cases - a.cases;
        });

        setConfirmedCasesByCountry(response.data);
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
    isLoading && confirmedCasesByCountry !== undefined ? (
      <span>Loading...</span>
    ) : (
      <div>
        <div>Confirmed Cases by Province/State/Dependency</div>
        {confirmedCasesByCountry.map((data) => {
          return (
            <div key={data.country}>
              <span>
                <strong>{data.cases}</strong> {data.country}
              </span>
            </div>
          );
        })}
      </div>
    );

  return totalConfirmed;
};

export default CasesByArea;
