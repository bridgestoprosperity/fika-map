import { hoverHandler } from "./hoverHandler.js";
import { stopHoverHandler } from "./hoverHandler.js";
import { clickHandler } from "./clickHandler.js";

let hoverLayers = ["travel-primaryschool"];
let clickLayers = ["travel-primaryschool"];
let toggleLayers = [];
let showLayers = [];
let hideLayers = [];

mapboxgl.accessToken = "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/highestroad/clg35ltys000m01nhht5my9n3", // style URL
  center: [29.519, -1.956], // starting position [lng, lat]
  zoom: 8.2, // starting zoom
  hash: true,
});

for (let i = 0; i < hoverLayers.length; i++) {
  map.on("mousemove", hoverLayers[i], function (e) {
    // console.log the feature properties
    map.getCanvas().style.cursor = "pointer";
    hoverHandler(hoverLayers[i], e.features[0].properties);
  });
  map.on("mouseleave", hoverLayers[i], function (e) {
    map.getCanvas().style.cursor = "";
    stopHoverHandler(hoverLayers[i]);
  });
}

for (let i = 0; i < clickLayers.length; i++) {
  map.on("click", function (e) {
    document.getElementById("click-panel").classList.remove("show");
  });
  map.on("click", clickLayers[i], function (e) {
    clickHandler(clickLayers[i], e.features[0].properties);
  });
}

// When anywhere else on the map is clicked, the click panel should be hidden. To do this, we add a click event listener to the map object. This event listener will call a function that will hide the click panel.
