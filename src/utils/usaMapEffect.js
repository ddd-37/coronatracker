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
  const countyInfo = json.features;

  //The county coordinates come from a local JSON file, while the numbers come the above API rerquest
  // We need to add the data tp the countyInfo object
  // Let's sort the countyInfo data alphbetically first, through my testing this reducuced the time to combine the objects from 23006ms to 172ms

  countyInfo.sort((a, b) => {
    if (a.properties.NAME < b.properties.NAME) {
      return -1;
    }
    if (a.properties.NAME > b.properties.NAME) {
      return 1;
    }
    return 0;
  });

  countyInfo.forEach((obj1) => {
    data.forEach((obj2) => {
      if (obj1.properties.NAME === obj2.county) {
        obj1.stats = obj2.stats;
      }
    });
  });

  // Function used to add colors with increasing intensity due to total case numbers
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

  // Function used to add styles to each county
  function style(feature) {
    let fillColor = "#FFEDA0";
    if (feature.stats) {
      fillColor = getColor(feature.stats.confirmed);
    }

    return {
      fillColor: fillColor,
      weight: 1,
      opacity: 1,
      color: "rgba(0,0,0,.6)",
      fillOpacity: 0.9,
    };
  }

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 2,
      color: "#f4f4f4",
      fillOpacity: 0.7,
    });

    // IE, Opera and Edge have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  var geojson;

  // Function used to reset style on mouseout
  function resetHighlight(e) {
    geojson.resetStyle(e.target);
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  //Add the listeners on our county layers
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }
  // Create a new instance of L.GeoJSON which will transform our GeoJSON document into something Leaflet will understand

  geojson = L.geoJson(countyInfo, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(map);
}

export default usaMapEffect;
