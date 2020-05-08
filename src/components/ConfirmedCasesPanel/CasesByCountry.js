import React, { useState, useEffect } from "react";
import axios from "axios";

const CasesByArea = () => {
  const [isLoading, setLoading] = useState(false);
  const [casesByCountry, setCasesByCountry] = useState([]);

  useEffect(() => {
    async function getcases() {
      let response;

      setLoading(true);
      try {
        response = await axios.get("https://corona.lmao.ninja/v2/countries");

        response.data.sort((a, b) => {
          return b.cases - a.cases;
        });

        setCasesByCountry(response.data);
      } catch (e) {
        console.log(`Failed to fetch casesByCountry: ${e.message}`, e);
        return;
      } finally {
        setLoading(false);
      }
    }

    getcases();
  }, []);

  let totalConfirmed =
    isLoading && casesByCountry !== undefined ? (
      <span>Loading...</span>
    ) : (
      <section>
        <div>Confirmed Cases by Country/Region/Sovereignty</div>
        <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
          {casesByCountry.map((data) => {
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
