import React, { useState, useEffect } from "react";
import axios from "axios";

const CasesByArea = () => {
  const [isLoading, setLoading] = useState(false);
  const [confirmedCasesByCountry, setConfirmedCasesByCountry] = useState([]);
  const [casesByCounty, setcasesByCounty] = useState([]);

  useEffect(() => {
    async function getConfirmedCases() {
      let countryData;
      let countyData;
      setLoading(true);
      try {
        countryData = await axios.get("https://corona.lmao.ninja/v2/countries");
        countyData = await axios.get("https://disease.sh/v2/jhucsse");

        countryData.data.sort((a, b) => {
          return b.cases - a.cases;
        });

        countyData.data.sort((a, b) => {
          return b.stats.confirmed - a.stats.confirmed;
        });

        setConfirmedCasesByCountry(countryData.data);
        setcasesByCounty(countyData.data);
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
        {" "}
        <div>Confirmed Cases by Province/State/Dependency</div>
        <div style={{ maxHeight: "66vh", overflowY: "scroll" }}>
          {/* {confirmedCasesByCountry.map((data) => {
            return (
              <div key={data.country} style={{borderBottom: '1px solid #f4f4f4'}}>
                <span>
                  <strong>{data.cases}</strong> {data.country}
                </span>
              </div>
            );
          })} */}
          {casesByCounty.map((data, i) => {
            console.log("CasesByArea -> data", data);

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
      </div>
    );

  return totalConfirmed;
};

export default CasesByArea;
