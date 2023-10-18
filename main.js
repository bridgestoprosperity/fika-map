import "bootswatch/dist/flatly/bootstrap.min.css";
import "./style.css";

import hoverHandler from "/@js/hoverHandler.js";
import stopHoverHandler from "/@js/hoverHandler.js";
import clickHandler from "/@js/clickHandler.js";
// import * as styleVars from "/@js/menuOptions.js";
import * as menuManager from "/@js/menu-manager.js";
import * as mapManager from "/@js/map-manager.js";
// import * as chartBuilder from "/@js/chart-builder.js";
import { initializeCharts } from "/@js/click-chart-builder.js";
import sidebarHandler from "/@js/sidebarHandler.js";


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
mapboxgl.accessToken = "pk.eyJ1IjoiYnJpZGdlc3RvcHJvc3Blcml0eSIsImEiOiJjbG51aHV6MDEwZDI1Mmx0MzhqcHFvb3BuIn0.wgSlMp8cyuIYVMvj_p-Ojg";
export const map = new mapboxgl.Map({
  container: "map", 
  style: "mapbox://styles/bridgestoprosperity/clnw3iksu001901ps9viw4huv",
  center: [29.519, -1.956],
  zoom: 8.2,
  hash: true,
  maxBounds: [
    [26.8560, -4.8400], // Southwest coordinates
    [32.8954, 1.0546] // Northeast coordinates
  ],
  minZoom: 7.1,
  attributionControl: false,
});
map.addControl(new mapboxgl.AttributionControl(), 'bottom-right');
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "bottom-left");

// initialize dropdowns
export let dropdownList = [];
for (let i = 1; i <= 4; i++) {
  let dropdown = document.getElementById("dropdown" + i);
  dropdownList.push(dropdown);
}
function nospaces(str) {
  return str.replace(/\s/g, "");
}

menuManager.updateMenu(menuManager.menuOptions.dropdown1, dropdown1);
dropdown1.value = "Travel Time";
menuManager.updateMenu(menuManager.menuOptions.dropdown2[nospaces(dropdown1.value)], dropdown2);
dropdown2.value = "With All Bridges";
menuManager.updateMenu(menuManager.menuOptions.dropdown3[nospaces(dropdown1.value)], dropdown3);
dropdown3.value = "To School";
menuManager.updateMenu(menuManager.menuOptions.dropdown4, dropdown4);
dropdown4.disabled = false;



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

//  Charts Initialized as 
initializeCharts();

// Map on Load Section
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

// handling button clicks


let sidebarButtons = ["info-button", "feedback-button", "bridge-need-button", "bug-button", "controls-button", "control-panel-close"];
for (let i = 0; i < sidebarButtons.length; i++) {
  document.getElementById(sidebarButtons[i]).addEventListener("click", function () {
    console.log(sidebarButtons[i]);
    sidebarHandler(sidebarButtons[i]);

  });
}

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("click-panel").classList.remove("show");
  document.getElementById("control-panel").classList.remove("left");
});

document.getElementById("close-modal-button").addEventListener("click", function () {
  var modal = document.getElementById('info-modal');
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
});