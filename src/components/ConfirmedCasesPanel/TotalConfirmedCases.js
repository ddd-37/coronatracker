import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalConfirmedCases = () => {
  const [isLoading, setLoading] = useState(false);
  const [confirmedCases, setConfirmedCases] = useState([]);

  useEffect(() => {
    async function getConfirmedCases() {
      setLoading(true);
      try {
        const casesConfirmed = await axios.get(
          "https://corona.lmao.ninja/v2/all"
        );
        setConfirmedCases(casesConfirmed.data.cases);
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
    isLoading && confirmedCases !== undefined ? (
      <span>Loading...</span>
    ) : (
      <div>
        <h3>Total Confirmed</h3>
        <h2>
          <strong>{confirmedCases}</strong>
        </h2>
      </div>
    );

  return totalConfirmed;
};

export default TotalConfirmedCases;
