import "bootswatch/dist/flatly/bootstrap.min.css";
import "./style.css";

import hoverHandler from "/@js/hoverHandler.js";
import stopHoverHandler from "/@js/hoverHandler.js";
import clickHandler from "/@js/clickHandler.js";
import * as clickVars from "/@js/clickHandler.js";
// import * as styleVars from "/@js/menuOptions.js";
import * as menuManager from "/@js/menu-manager.js";
import * as mapManager from "/@js/map-manager.js";
// import * as chartBuilder from "/@js/chart-builder.js";

import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Chart from "chart.js/auto";

// DELETE
let hoverLayers = ["villages-travel-time-simple", "villages-travel-time-detailed"];
let clickLayers = ["villages-travel-time-detailed", "villages-travel-time-simple"];
let toggleLayers = [];
let showLayers = [];
let hideLayers = [];
export let styleKey = "";
// END DELETE

// initialize map
mapboxgl.accessToken = "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q";
export const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/highestroad/clg35ltys000m01nhht5my9n3", // style URL
  center: [29.519, -1.956], // starting position [lng, lat]
  zoom: 8.2, // starting zoom
  hash: true,
});
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "bottom-left");

// initialize dropdowns
export let dropdownList = [];
for (let i = 1; i <= 4; i++) {
  let dropdown = document.getElementById("dropdown" + i);
  dropdownList.push(dropdown);
}

menuManager.updateMenu(menuManager.menuOptions.dropdown1, dropdown1);
dropdown1.value = "Demographics";
menuManager.updateMenu(menuManager.menuOptions.dropdown2[dropdown1.value], dropdown2);
dropdown2.value = "Male Education";
menuManager.updateMenu(menuManager.menuOptions.dropdown3[dropdown1.value], dropdown3);
dropdown3.value = "N/A";
menuManager.updateMenu(menuManager.menuOptions.dropdown4, dropdown4);
dropdown4.disabled = false;

function nospaces(str) {
  return str.replace(/\s/g, "");
}

export let menuState = {};
for (let i = 1; i <= 4; i++) {
  let dropdownId = "dropdown" + i;
  menuState[dropdownId] = dropdownList[i - 1].value;
}
export function updateMenuState() {
  for (let i = 0; i < 4; i++) {
    menuState[dropdownList[i].id] = dropdownList[i].value;
  }
}

// ToDo upate menu state for each key in Menu State

dropdownList.forEach((dropdown) => {
  dropdown.addEventListener("change", function () {
    if (dropdown.id == "dropdown1") {
      menuManager.updateMenu(menuManager.menuOptions.dropdown2[nospaces(dropdown.value)], dropdown2);
      menuManager.updateMenu(menuManager.menuOptions.dropdown3[nospaces(dropdown.value)], dropdown3);
    }
    if (dropdown.id == "dropdown4") {
      menuManager.updateBaselayer(dropdown4.value);
    }
    updateMenuState();
    mapManager.updateHexStyling(menuState);
  });
});

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

// let interestVar = "male_educational_attainment_mean";
// console.log(styleVars.quantiles[interestVar]["max"]);
// let middleVar = styleVars.quantiles[interestVar]["min"] + (styleVars.quantiles[interestVar]["max"] - styleVars.quantiles[interestVar]["min"]) / 2;

// on mapbox map load add data/data/rwa_travel_time_hex-8-rounded.geojson
map.on("load", function () {
  mapManager.initializeMap(map);
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    bbox: [28.8560, -2.8400, 30.8954, -1.0546]
    });
  document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

  let clickedFeatureID = null;
  let hoverFeatureID = null;
  clickLayers = ["hex-8-layer"];
  hoverLayers = ["hex-8-layer", "bridge-point", "health-point", "edu-point"];

  // Hover Section:


  for (let i = 0; i < hoverLayers.length; i++) {
    map.on("mousemove", hoverLayers[i], function (e) {
      if (e.features[0]["id"]) {
        hoverFeatureID = e.features[0]["id"];
        map.getCanvas().style.cursor = "pointer";
        hoverHandler(hoverLayers[i], e.features[0]);
      }
    });
  }
  for (let i = 0; i < hoverLayers.length; i++) {
    map.on("mouseleave", hoverLayers[i], function (e) {
      stopHoverHandler(hoverLayers[i]);
      map.getCanvas().style.cursor = "";
    });
  }

  for (let i = 0; i < clickLayers.length; i++) {
    map.on("click", function (e) {
      document.getElementById("click-panel").classList.remove("show");
      document.getElementById("control-panel").classList.remove("left");
      if (clickedFeatureID !== null) {
        map.setFeatureState({ source: "hex-8-source", id: clickedFeatureID }, { click: false });
      }
      clickedFeatureID = null;
    });
    map.on("click", clickLayers[i], function (e) {
      clickHandler(clickLayers[i], e.features[0].properties);
      document.getElementById("control-panel").classList.add("left");
      // console.log(e.features);
      if (e.features.length > 0) {
        if (clickedFeatureID !== null) {
          map.setFeatureState({ source: "hex-8-source", id: clickedFeatureID }, { click: false });
        }
        clickedFeatureID = e.features[0].id;
        map.setFeatureState({ source: "hex-8-source", id: clickedFeatureID }, { click: true });
      }
    });
  }
});
