import L from "leaflet";
import axios from "axios";

/**
 * mapEffect
 * @description Fires a callback once the page renders
 * @example Here this is and example of being used to zoom in and set a popup on load
 */

async function mapEffect({ leafletElement: map }) {
  let response;

  try {
    response = await axios.get("https://corona.lmao.ninja/v2/countries");
  } catch (e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }

  const { data = [] } = response;

  // Check to see if our data is an array and had data
  const hasData = Array.isArray(data) && data.length > 0;

  if (!hasData) return;

  // Create our GeoJSON document
  const geoJson = {
    type: "FeatureCollection",
    features: data.map((country = {}) => {
      const { countryInfo = {} } = country;
      const { lat, long: lng } = countryInfo;
      return {
        type: "Feature",
        properties: {
          ...country,
        },
        geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
      };
    }),
  };

  // Create a new instance of L.GeoJSON which will transform our GeoJSON document into something Leaflet will understand
  const geoJsonLayers = new L.GeoJSON(geoJson, {
    // Define a custom pointToLayer function. This allows us to customize the map layer Leaflet creates for our map
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

      return L.marker(latlng, {
        icon: L.divIcon({
          className: "icon",
          html,
        }),
        riseOneHover: true,
      });
    },
  });

  geoJsonLayers.addTo(map);
}

export default mapEffect;
