import * as index from "/main.js";
import { map } from "../../main.js";
import { updateCharts } from "./click-chart-builder.js";

const clickPanel = document.getElementById("click-panel");
export let radarValues1 = [];
export let radarValues2 = [];
export let radarData1 = [];
export let radarData2 = [];
let otherPop = 0;
let popData = [];

// const clickPanelCanvas = document.getElementById("click-panel-canvas");
// const clickPanelWords = document.getElementById("click-panel-words");
// const ctx = clickPanelCanvas.getContext('2d');
// let chart = null;

let pathLayers = ["ps-paths", "ss-paths", "hp-paths", "hc-paths", "hos-paths", "sdu-paths", "ps-paths-outline", "ss-paths-outline", "hp-paths-outline", "hc-paths-outline", "hos-paths-outline", "sdu-paths-outline"];

export default function clickHandler(layerName, feature) {
  // need to do something here where the values are converted to graph values which max out at 60.
  // the hover values will be the same as the actual values.
  // the chart scale will be set from 0, 15, 30, 60
  // console.log(chart);
  // console.log(feature)
  // console.log(feature["h3-index"])
  radarData1 = [feature["travel_time_primary_schools_fixed"], feature["travel_time_secondary_schools_fixed"], feature["travel_time_health_centers_optimal"], feature["travel_time_major_hospitals_optimal"], feature["travel_time_semi_dense_urban_optimal"]];
  radarData2 = [feature["travel_time_no_sites_primary_schools_fixed"], feature["travel_time_no_sites_secondary_schools_fixed"], feature["travel_time_no_sites_health_centers_optimal"], feature["travel_time_no_sites_major_hospitals_optimal"], feature["travel_time_no_sites_semi_dense_urban_optimal"]];
  radarValues1 = [];
  radarValues2 = [];
  for (let i = 0; i < radarData1.length; i++) {
    if (radarData1[i] > 120) {
      radarValues1.push(120);
    } else {
      radarValues1.push(radarData1[i]);
    }
    if (radarData2[i] > 120) {
      radarValues2.push(120);
    } else {
      radarValues2.push(radarData2[i]);
    }
  }

  clickPanel.classList.add("show");
  // otherPop = feature["population"] - feature["women_15_49"] - feature["men_15_49"] - feature["kids_5_9"];
  popData = [
    [100, 20],
    [Math.round(feature["kids_0_9"]), Math.round(feature["kids_10_14"]), Math.round(feature["males_15_49"]), Math.round(feature["females_15_49"]), Math.round(feature["people_65_plus"])],
  ];
  popData = [[420], [210, 210], [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]];
  popData = [
    [feature["population"]],
    [
      Math.round(feature["females_0_4"] + feature["females_5_9"] + feature["females_10_14"] + feature["females_15_49"] + feature["females_50_64"] + feature["females_65_plus"]),
      Math.round(feature["males_0_4"] + feature["males_5_9"] + feature["males_10_14"] + feature["males_15_49"] + feature["males_50_64"] + feature["males_65_plus"]),
    ],
    [
      Math.round(feature["females_65_plus"]),
      Math.round(feature["females_50_64"]),
      Math.round(feature["females_15_49"]), 
      Math.round(feature["females_10_14"]),
      Math.round(feature["females_5_9"]),
      Math.round(feature["females_0_4"]), 
      Math.round(feature["males_0_4"]),
      Math.round(feature["males_5_9"]),
      Math.round(feature["males_10_14"]),
      Math.round(feature["males_15_49"]),
      Math.round(feature["males_50_64"]),
      Math.round(feature["males_65_plus"])
    ],
  ];
  // console.log(popData);

  // updating charts
  updateCharts(radarValues1, radarValues2, popData);

  document.getElementById("words-click").innerHTML = "";
  for (var key in feature) {
    if (feature.hasOwnProperty(key)) {
      document.getElementById("words-click").innerHTML += key + " -> " + feature[key] + "<br>";
    }
  }
  // map.on('click', 'hex-8-layer', function (e) {
  // Get the h3-index value of the clicked feature
  var h3IndexValue = feature["h3-index"];

  // for every layer in the pathLayers array, set the filter to the h3IndexValue
  for (let i = 0; i < pathLayers.length; i++) {
    map.setFilter(pathLayers[i], ["==", "h3-index", h3IndexValue]);
  }
}
