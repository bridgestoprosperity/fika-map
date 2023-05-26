import { hoverHandler } from "./hoverHandler.js";
import { stopHoverHandler } from "./hoverHandler.js";
import { clickHandler } from "./clickHandler.js";
import * as clickVars from "./clickHandler.js";
import * as styleVars from "./menuOptions.js";


const { DeckGL, GeoJsonLayer } = deck;

// let menuOptions = require("./menu_options.json");

// read in menu_options as a json file
// let menuOptions = require("./menu_options.json");


let hoverLayers = ["villages-travel-time-simple", "villages-travel-time-detailed"];
let clickLayers = ["villages-travel-time-detailed", "villages-travel-time-simple"];
let toggleLayers = [];
let showLayers = [];
let hideLayers = [];

// let menuOptions = assets/menuOptions.json;


mapboxgl.accessToken = "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/highestroad/clg35ltys000m01nhht5my9n3", // style URL
  center: [29.519, -1.956], // starting position [lng, lat]
  zoom: 8.2, // starting zoom
  hash: true,
});
console.log(styleVars.menuOptions);

let selectedValues = [];
let dropdown1 = document.getElementById("dropdown1");
let dropdown2 = document.getElementById("dropdown2");
let dropdown3 = document.getElementById("dropdown3");
let dropdown4 = document.getElementById("dropdown4");
let dropdown5 = document.getElementById("dropdown5");
let d1Options = ["Travel Time", "Female Education", "Male Education", "options4", "options5"];
let d2Options = ["With Bridges", "Without Bridges", "Change", "options9", "options10"];
let d3Options = ["To Schools", "To Hospitals", "To Markets", "To Primary Schools", "To Secondary Schools", "to Health Centers", "to Health Major"];
let d4Options = ["Auto Geography", "Hex", "Village", "Admin 4", "Admin 3", "Admin 2"];
let d5Options = ["Standard basemap", "Simple basemap", "Satellite map"];

let dropdowns = [dropdown1, dropdown2, dropdown3, dropdown4, dropdown5];
let options = [d1Options, d2Options, d3Options, d4Options, d5Options];

for (let i = 0; i < dropdowns.length; i++) {
  for (let j = 0; j < options[i].length; j++) {
    let option = document.createElement("option");
    option.text = options[i][j];
    option.value = options[i][j];
    dropdowns[i].appendChild(option);
  }
}
// This creates and updates a list that contains the values of the dropdowns this will be used to upate the map
for (let i = 0; i < 3; i++) {
  selectedValues.push(dropdowns[i].value);
}
for (let i = 0; i < 3; i++) {
  dropdowns[i].addEventListener("change", function () {
    selectedValues[i] = dropdowns[i].value;
    console.log(selectedValues);
    let styleKey = Object.keys(styleVars.menuOptions).find(
      key => JSON.stringify(styleVars.menuOptions[key]) === JSON.stringify(selectedValues)
    );
    let middleVar = styleVars.quantiles[styleKey]["min"] + ((styleVars.quantiles[styleKey]["max"] - styleVars.quantiles[styleKey]["min"]) / 2);
    map.setPaintProperty("hex-8-layer", "fill-color", ["interpolate", ["linear"], ["get", styleKey], styleVars.quantiles[styleKey]["min"], "#12822e", styleVars.quantiles[styleKey]["mean"], "#fff700", styleVars.quantiles[styleKey]["max"], "#f50000"]);
    // "fill-color": ["interpolate", ["linear"], ["get", interestVar], styleVars.quantiles[interestVar]["min"], "#f50000", middleVar, "#fff700", styleVars.quantiles[interestVar]["max"], "#12822e"],
  });
}


let radarData = {
  labels: ["Primary Schools", "Secondary Schools", "Health Centers", "Hospitals", "Markets"],
  datasets: [
    {
      label: "Travel Time With Bridges",
      data: [],
      fill: "+1",
      backgroundColor: "rgba(117, 117, 117, 0.3)",
      borderColor: "rgb(158, 199, 163)",
      pointBackgroundColor: "rgb(158, 199, 163)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
      clip: false,
    },
    {
      label: "Travel Time Without Bridges",
      data: [],
      fill: false,
      backgroundColor: "rgba(206, 97, 96, 0.5)",
      borderColor: "rgb(206, 97, 96)",
      pointBackgroundColor: "rgb(206, 97, 96)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
      clip: false,
    },
  ],
};

let radarConfig = {
  type: "radar",
  data: radarData,
  options: {
    scale: {
      r: {
        min: 0,
        max: 120,
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 120,
        stepSize: 30,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    interaction: {
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            let value1 = context.dataset.data[context.dataIndex];
            let value = 0;
            console.log("label is" + context.dataset.label);
            if (label == "Travel Time With Bridges") {
              value = Math.round(clickVars.radarData1[context.dataIndex]);
            } else if (label == "Travel Time Without Bridges") {
              value = Math.round(clickVars.radarData2[context.dataIndex]);
            } else {
              console.log("else");
              value = context.dataset.data[context.dataIndex];
            }
            label += ": " + value + " minutes";
            return label;
          },
        },
      },
    },
  },
};

let pieData = {
  labels: ["Children", "Teens", "Adult Men", "Adult Women", "Elderly"],
  datasets: [
    {
      label: "Population",
      data: [],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#B2BEB5"],
      hoverOffset: 4,
    },
  ],
};
let pieConfig = {
  type: "pie",
  data: pieData,
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Population",
      },
    },
  },
};

export let radarChart = new Chart(document.getElementById("click-panel-canvas"), radarConfig);
export let pieChart = new Chart(document.getElementById("click-panel-canvas2"), pieConfig);

// document.getElementById("hide-button").addEventListener("click", function () {
//   document.getElementById("control-panel").classList.add("left");
// });

let interestVar = "male_educational_attainment_mean";
console.log(styleVars.quantiles[interestVar]["max"])
let middleVar = styleVars.quantiles[interestVar]["min"] + ((styleVars.quantiles[interestVar]["max"] - styleVars.quantiles[interestVar]["min"]) / 2);

// on mapbox map load add home/assets/data/rwa_travel_time_hex-8-rounded.geojson
map.on("load", function () {
  // add home/assets/data/rwa_travel_time_hex-8-rounded.geojson
  map.addSource("hex-8-source", {
    type: "geojson",
    data: "./assets/data/rwa_travel_time_hex-8.geojson",
  });
  map.addLayer(
    {
      id: "hex-8-layer",
      type: "fill",
      source: "hex-8-source",
      paint: {
        "fill-color": ["interpolate", ["linear"], ["get", interestVar], styleVars.quantiles[interestVar]["min"], "#f50000", middleVar, "#fff700", styleVars.quantiles[interestVar]["max"], "#12822e"],
        'fill-opacity': [ 'case', ['boolean', ['feature-state', 'hover'], false], 1, 0.5 ],
      },
    },
    "admin-0-boundary-disputed"
  );
  clickLayers = ["hex-8-layer"];
  hoverLayers = ["hex-8-layer"];
  let featureID = null;
  // for (let i = 0; i < hoverLayers.length; i++) {
  //   map.on("mousemove", hoverLayers[i], function (e) {
  //     // console.log the feature properties
  //     map.getCanvas().style.cursor = "pointer";
  //     if (e.features.length > 0) {
  //       console.log("hello there")
  //       if (featureID !== null) {
  //         map.setFeatureState({ source: "hex-8-source", id: featureID }, { hover: false });
  //       }
  //       featureID = e.features[0].id;
  //       map.setFeatureState({ source: "hex-8-source", id: featureID }, { hover: true });
  //     }

  //     hoverHandler(hoverLayers[i], e.features[0].properties);
  //   });
  //   map.on("mouseleave", hoverLayers[i], function (e) {
  //     map.getCanvas().style.cursor = "";
  //     stopHoverHandler(hoverLayers[i]);
  //   });
  // }

  for (let i = 0; i < clickLayers.length; i++) {
    map.on("click", function (e) {
      document.getElementById("click-panel").classList.remove("show");
      document.getElementById("control-panel").classList.remove("left");
      
    });
    map.on("click", clickLayers[i], function (e) {
      clickHandler(clickLayers[i], e.features[0].properties);
      document.getElementById("control-panel").classList.add("left");
    });
  }
});

// on mapbox map load
// map.on("load", function () {
//   fetch('./assets/data/rwa_travel_time_hex-7.geojson')
//   .then(response => response.json())
//   .then(data => {
//     const deckLayer = new deck.DeckGL({
//       map: map,
//       layers: [
//         new deck.PolygonLayer({
//           id: 'polygon-layer',
//           data: data,
//           getPolygon: d => d.geometry.coordinates,
//           getFillColor: [255, 0, 0, 100],
//           getLineColor: [0, 0, 0],
//           lineWidthMinPixels: 1,
//         })
//       ],
//     });
//   });
// });
//  make a list of all these properties "h3-index": "886ad80001fffff", "row_col": [1334, 1576], "x_y": [30.1711124, -2.157208], "population": 281.249, "kids_0_9": 68.8977, "kids_5_9": 37.4674, "kids_10_14": 35.9179, "males_15_49": 78.837, "females_15_49": 64.4514, "people_65_plus": 8.7487, "pregnancies": 17.4729, "births": 12.3386, "rwi": -0.128, "underweight": 0.0816, "female_educational_attainment_mean": 4.5752, "male_educational_attainment_mean": 4.9117, "time_delta_all_removed_fixed_education_all": 0.0, "time_delta_all_removed_fixed_education_primary": 0.0, "time_delta_all_removed_fixed_education_secondary": 0.0, "time_delta_all_removed_fixed_markets": 0.0, "time_delta_all_removed_optimal_health_all": 0.0, "time_delta_all_removed_optimal_health_centers": 0.0, "time_delta_all_removed_optimal_health_major": 0.0, "time_delta_all_removed_optimal_markets": 0.0, "travel_time_all_removed_fixed_education_all": 66.5, "travel_time_all_removed_fixed_education_primary": 66.5, "travel_time_all_removed_fixed_education_secondary": 161.625, "travel_time_all_removed_fixed_markets": 296.0417, "travel_time_all_removed_optimal_health_all": 115.125, "travel_time_all_removed_optimal_health_centers": 198.9167, "travel_time_all_removed_optimal_health_major": 331.3333, "travel_time_all_removed_optimal_markets": 296.0417, "travel_time_education_all": 66.5, "travel_time_education_primary": 66.5, "travel_time_education_secondary": 161.625, "travel_time_health_all": 115.125, "travel_time_health_centers": 198.9167, "travel_time_health_major": 331.3333, "travel_time_markets": 296.0417
  


