import * as index from "/main.js";
import { map } from "../../main.js";
import { updateCharts } from "./click-chart-builder.js";
import { dataMap } from "./dataMap.js";
import { impactCalc } from "./dataMap.js";

const clickPanel = document.getElementById("click-panel");
export let radarValues1 = [];
export let radarValues2 = [];
export let radarData1 = [];
export let radarData2 = [];
export let travelTimeDist = [];
export let travelTime1 = [];
export let travelTime2 = [];
let otherPop = 0;
let popData = [];

// const clickPanelCanvas = document.getElementById("click-panel-canvas");
// const clickPanelWords = document.getElementById("click-panel-words");
// const ctx = clickPanelCanvas.getContext('2d');
// let chart = null;

let pathLayers = ["ps-paths", "ss-paths", "hp-paths", "hc-paths", "hos-paths", "sdu-paths", "ps-paths-outline", "ss-paths-outline", "hp-paths-outline", "hc-paths-outline", "hos-paths-outline", "sdu-paths-outline"];

function roundToThree(value) {
  if (Number.isFinite(value)) {
    var decimalCount = (value.toString().split('.')[1] || '').length;
    
    if (decimalCount > 3) {
      return parseFloat(value.toFixed(3));
    }
  }
  
  return value;
}

export default function clickHandler(layerName, feature) {
  // need to do something here where the values are converted to graph values which max out at 60.
  // the hover values will be the same as the actual values.
  // the chart scale will be set from 0, 15, 30, 60
  radarClick(feature)
  popClick(feature)
  barClick(feature)
  let populationImpact = impactGenerator(feature)
  clickPanel.classList.add("show");
  document.getElementById("summary-text").innerHTML = `This area has a population of <span class="impact-style">${feature.population}</span> and an relative wealth index of <span class="impact-style">${Math.round(feature.rwi * 100) / 100}</span>. Trail bridges currently have a <span class="impact-style">${populationImpact[1][1]}</span> impact and a <span class="impact-style">${populationImpact[1][0]}</span> potential impact`;

  updateCharts(radarValues1, radarValues2, popData, travelTime1, travelTime2);
  // updating the raw data table
  document.getElementById("all-data-table").innerHTML = "";
  for (var key in feature) {
    if (feature.hasOwnProperty(key)) {
      document.getElementById("all-data-table").innerHTML += "<tr><td>"+key+"</td> <td>"+roundToThree(feature[key])+"</td></tr>"
    }
  }
  // for every layer in the pathLayers array, set the filter to the h3IndexValue
  for (let i = 0; i < pathLayers.length; i++) {
    map.setFilter(pathLayers[i], ["==", "h3-index", feature["h3-index"]]);
  }
}

function radarClick(feature) {
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
}
function popClick(feature){
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
}
function impactGenerator(feature) {
  const impactKeys = [
    'total_potential_impact', 'total_current_impact',
    'total_health_potential_impact', 'total_health_current_impact',
    'total_school_potential_impact', 'total_school_current_impact',
    'semi_dense_urban_potential_impact', 'semi_dense_urban_current_impact',
    'secondary_schools_potential_impact', 'secondary_schools_current_impact',
    'primary_schools_potential_impact', 'primary_schools_current_impact',
    'major_hospitals_potential_impact', 'major_hospitals_current_impact',
    'health_posts_potential_impact', 'health_posts_current_impact',
    'health_centers_potential_impact', 'health_centers_current_impact'
  ];

  const impactValues = impactKeys.map(key => feature[key]);
  const impactRating = impactValues.map(impactCalc);
  return [impactValues, impactRating];
}

function calculatePercentile(travelTime, category) {
  let categoryQuantiles = dataMap[category][3]["quantiles"]
  if (travelTime <= categoryQuantiles[0]) {
      return 0; // If travelTime is less than or equal to the lowest quantile, it's at 0th percentile.
  } else if (travelTime >= categoryQuantiles[categoryQuantiles.length - 1]) {
      return 100; // If travelTime is greater than or equal to the highest quantile, it's at 100th percentile.
  } else {
      for (let i = 1; i < categoryQuantiles.length; i++) {
          if (travelTime <= categoryQuantiles[i]) {
              const lowerQuantile = categoryQuantiles[i - 1];
              const upperQuantile = categoryQuantiles[i];
              const percentile = ((travelTime - lowerQuantile) / (upperQuantile - lowerQuantile)) * 10 + (i - 1) * 10;
              return Math.round(100-percentile);
          }
      }
  }
}

function barClick(feature){
  travelTimeDist = [
    calculatePercentile(feature["travel_time_no_sites_primary_schools_fixed"], "travel_time_no_sites_primary_schools_fixed"),
    calculatePercentile(feature["travel_time_no_sites_secondary_schools_fixed"], "travel_time_no_sites_secondary_schools_fixed"),
    calculatePercentile(feature["travel_time_no_sites_health_centers_optimal"], "travel_time_no_sites_health_centers_optimal"),
    calculatePercentile(feature["travel_time_no_sites_health_posts_optimal"], "travel_time_no_sites_health_posts_optimal"),
    calculatePercentile(feature["travel_time_no_sites_major_hospitals_optimal"], "travel_time_no_sites_major_hospitals_optimal"),
    calculatePercentile(feature["travel_time_no_sites_semi_dense_urban_optimal"], "travel_time_no_sites_semi_dense_urban_optimal"),
  ];
  travelTime1 = [
    travelTimeDist[0]-1,
    travelTimeDist[1]-1,
    travelTimeDist[2]-1,
    travelTimeDist[3]-1,
    travelTimeDist[4]-1,
    travelTimeDist[5]-1,

  ];
  travelTime2 = [
    100 - travelTimeDist[0],
    100 - travelTimeDist[1],
    100 - travelTimeDist[2],
    100 - travelTimeDist[3],
    100 - travelTimeDist[4],
    100 - travelTimeDist[5],
  ]
  return(travelTime1, travelTime2)

}