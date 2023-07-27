import * as index from "/main.js";
import { map } from "../../main.js";

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//     label: 'My Dataset',
//     data: [0, 10, 5, 2, 20, 30, 45],
//     fill: false,
//     borderColor: 'red',
//     tension: 0.4
//   }]
// };

// const options = {
//   responsive: true,
//   maintainAspectRatio: true,
//   scales: {
//     y: {
//       beginAtZero: true
//     }
//   }
// };

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

export default function clickHandler(layerName, feature) {
  // need to do something here where the values are converted to graph values which max out at 60.
  // the hover values will be the same as the actual values.
  // the chart scale will be set from 0, 15, 30, 60
  // console.log(chart);
  // console.log(feature)
  // console.log(feature["h3-index"])
  radarData1 = [feature["travel_time_education_primary"], feature["travel_time_education_secondary"], feature["travel_time_health_centers"], feature["travel_time_health_major"], feature["travel_time_markets"]];
  radarData2 = [feature["travel_time_all_removed_fixed_education_primary"], feature["travel_time_all_removed_fixed_education_secondary"], feature["travel_time_all_removed_optimal_health_centers"], feature["travel_time_all_removed_optimal_health_major"], feature["travel_time_all_removed_fixed_markets"]];
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

  document.getElementById("words-click").innerHTML = "";

  clickPanel.classList.add("show");
  // otherPop = feature["population"] - feature["women_15_49"] - feature["men_15_49"] - feature["kids_5_9"];
  popData = [Math.round(feature["kids_0_9"]), Math.round(feature["kids_10_14"]), Math.round(feature["males_15_49"]), Math.round(feature["females_15_49"]), Math.round(feature["people_65_plus"])]
  // console.log(popData);

  // updating charts
  index.radarChart.data.datasets[0].data = radarValues1;
  index.radarChart.data.datasets[1].data = radarValues2;
  index.pieChart.data.datasets[0].data = popData;
  index.radarChart.update();
  index.pieChart.update();
  for (var key in feature) {
    if (feature.hasOwnProperty(key)) {
      document.getElementById("words-click").innerHTML += key + " -> " + feature[key] + "<br>";
    }
  }
  // map.on('click', 'hex-8-layer', function (e) {
    // Get the h3-index value of the clicked feature
    var h3IndexValue = feature["h3-index"]

    // Update the filter on the 'edu-paths' layer
    map.setFilter('edu-paths', ['==', 'h3-index', h3IndexValue]);
    map.setFilter('edu-paths-outline', ['==', 'h3-index', h3IndexValue]);
  // });
}
