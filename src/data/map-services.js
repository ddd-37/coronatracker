const mapboxToken = process.env.GATSBY_MAPBOX_TOKEN;

export const mapServices = [
  {
    name: "OpenStreetMap",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "Mapbox",
    attribution:
      "Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>",
    url: `https://api.mapbox.com/styles/v1/ddeason37/ck9vhil4301ij1iqvye0i4497/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxToken}`,
  },
];
