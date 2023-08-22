import { map } from "../../main.js";
import { dataMap, palettes, mapStyles } from "./dataMap.js";

export let transSlider = document.getElementById("trans-slider");
// add event listener to slider and update layer transparency when updated
transSlider.addEventListener("change", function () {
  console.log(transSlider.value);
  map.setPaintProperty("hex-8-layer", "fill-opacity", Number(transSlider.value) / 100);
});

export function initializeMap(map) {

  map.addSource("hex-8-source", {
    type: "geojson",
    data: "./rwa_travel_time_hex-8.geojson",
    generateId: true,
  });
  map.addLayer(
    {
      id: "hex-8-layer",
      type: "fill",
      source: "hex-8-source",
      paint: {
        "fill-color": mapStyles.male_educational_attainment_mean["fill-color"],
        "fill-opacity": 0.5,
        "fill-outline-color": "rgba(255, 255, 255, .1)",
      },
    },
    "admin-0-boundary-disputed"
  );
  map.addLayer({
    id: "hex-8-hover",
    type: "line",
    source: "hex-8-source",
    paint: {
      "line-color": "#66BEC7",
      "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 15, 2],
      "line-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 0.75, 0],
    },
  });
  map.addLayer(
    {
      id: "hex-8-click",
      type: "fill",
      source: "hex-8-source",
      paint: {
        "fill-color": "#66BEC7",
        "fill-opacity": ["case", ["boolean", ["feature-state", "click"], false], 0.8, 0],
      },
    },
    "admin-0-boundary-disputed"
  );
}

function StyleKey(value) {
  return Object.keys(dataMap).find((key) => dataMap[key][0] === value);
}

function getKeyByValue(value) {
  for (let key in dataMap) {
    if (dataMap.hasOwnProperty(key) && dataMap[key][0] === value) {
      return key;
    }
  }
  return null;
}

export function updateHexStyling(currentMenuState) {
  console.log(currentMenuState);
  console.log(JSON.stringify([currentMenuState.dropdown1, currentMenuState.dropdown2, currentMenuState.dropdown3]))
  let styleKey = Object.keys(dataMap).find((key) => JSON.stringify(dataMap[key][0]) === JSON.stringify([currentMenuState.dropdown1, currentMenuState.dropdown2, currentMenuState.dropdown3]));
  console.log(styleKey);
  console.log(mapStyles[styleKey]);

  map.setPaintProperty("hex-8-layer", "fill-color", mapStyles[styleKey]["fill-color"]);
}
