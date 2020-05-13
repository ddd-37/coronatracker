import L from "leaflet";
import axios from "axios";

var json = require("./../../content/usaCountyCoords.json");

/**
 * mapEffect
 * @description Fires a callback once the page renders
 * @example Here this is and example of being used to zoom in and set a popup on load
 */

// ToDo - look into useContext here
async function usaMapEffect({ leafletElement: map }) {
  let response;

  try {
    response = await axios.get("https://disease.sh/v2/jhucsse/counties");
  } catch (e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }

  const { data = [] } = await response;

  // Check to see if our data is an array and had data
  const hasData = Array.isArray(data) && data.length > 0;

  if (!hasData) return;

  // Create our GeoJSON document
  const geoJson = json.features;

  function getColor(d) {
    return d > 5000
      ? "#800026"
      : d > 1000
      ? "#BD0026"
      : d > 500
      ? "#E31A1C"
      : d > 500
      ? "#FC4E2A"
      : d > 250
      ? "#FD8D3C"
      : d > 100
      ? "#FEB24C"
      : d > 50
      ? "#FED976"
      : "#FFEDA0";
  }

  // Find the anmes that match from the json data vs the data return from johns hopkins

  geoJson.sort((a, b) => {
    if (a.properties.NAME < b.properties.NAME) {
      return -1;
    }
    if (a.properties.NAME > b.properties.NAME) {
      return 1;
    }
    return 0;
  });

  //ToDo - This is slow
  geoJson.forEach((obj1) => {
    data.forEach((obj2) => {
      if (obj1.properties.NAME === obj2.county) {
        obj1.stats = obj2.stats;
      }
    });
  });

  //Append the numbers from the JHS data to geoJson
  // Compare the county name
  //If they match, append to properties

  function style(feature) {
    let fillColor = "#FFEDA0";
    if (feature.stats) {
      fillColor = getColor(feature.stats.confirmed);
    }

    return {
      fillColor: fillColor,
      weight: 1,
      opacity: 1,
      color: "rgba(0,0,0,.1)",
      fillOpacity: 0.8,
    };
  }
  // Create a new instance of L.GeoJSON which will transform our GeoJSON document into something Leaflet will understand
  const geoJsonLayers = new L.GeoJSON(geoJson, {
    // Define a custom pointToLayer function. This allows us to customize the map layer Leaflet creates for our map
    style: style,
    pointToLayer: (feature = {}, latlng) => {
      const { properties = {} } = feature;
      let updatedFormatted;
      let casesString;

      const { country, updated, cases, deaths, recovered } = properties;

      casesString = `${cases}`;

      if (cases > 1000) {
        casesString = `${casesString.slice(0, -3)}k+`;
      }

      if (updated) {
        updatedFormatted = new Date(updated).toLocaleString();
      }

      // Tooltip HTML
      const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h2>${country}</h2>
              <ul>
              <li><strong>Confirmed:</strong> ${cases}</li></ul>
              <li><strong>Deaths:</strong> ${deaths}</li></ul>
              <li><strong>Recovered:</strong> ${recovered}</li></ul>
              <li><strong>Last Update:</strong> ${updatedFormatted}</li></ul>
            </span>
            ${casesString}
          </span>
        `;

      const onCLickHtml = `
        <h2>${country}</h2>
        <ul>
        <li><strong>Confirmed:</strong> ${cases}</li>
        <li><strong>Deaths:</strong> ${deaths}</li>
        <li><strong>Recovered:</strong> ${recovered}</li>
        <li><strong>Last Update:</strong> ${updatedFormatted}</li></ul>
     `;

      return L.marker(latlng, {
        icon: L.divIcon({
          className: "icon",
          html,
        }),
        riseOneHover: true,
      }).bindPopup(onCLickHtml);
    },
  });

  geoJsonLayers.addTo(map);
}

export default usaMapEffect;
