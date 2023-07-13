// const mapboxgl = require('mapbox-gl');
// const Chart = require('chart.js');
// import { hoverHandler } from "./hoverHandler.js";
// import { stopHoverHandler } from "./hoverHandler.js";
// import { clickHandler } from "js/clickHandler.js";
// import * as clickVars from "js/clickHandler.js";
// import * as styleVars from "js/menuOptions.js";

// let hoverLayers = ["villages-travel-time-simple", "villages-travel-time-detailed"];
// let clickLayers = ["villages-travel-time-detailed", "villages-travel-time-simple"];
// let toggleLayers = [];
// let showLayers = [];
// let hideLayers = [];

// mapboxgl.accessToken = "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q";
// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//   style: "mapbox://styles/highestroad/clg35ltys000m01nhht5my9n3", // style URL 
//   center: [29.519, -1.956], // starting position [lng, lat]
//   zoom: 8.2, // starting zoom
//   hash: true,
// });
// const nav = new mapboxgl.NavigationControl();
// map.addControl(nav, 'bottom-left');

// let menuState = [];
// export let styleKey = "";
// let dropdown1 = document.getElementById("dropdown1");
// let dropdown2 = document.getElementById("dropdown2");
// let dropdown3 = document.getElementById("dropdown3");
// let dropdown4 = document.getElementById("dropdown4");
// let dropdown5 = document.getElementById("dropdown5");
// let d1Options = ["Travel Time", "Demographics", "Population"];
// let d2TravelTime = ["With Bridges", "Without Bridges", "Change"];
// let d2Demographics = ["Pregnancies", "Births", "RWI", "Underweight", "Female Education", "Male Education"];
// let d2Population = ["All", "Children 0-9", "Children 5-9", "Children 10-14", "Male 15-49", "Female 15-49", "Adults 65+"];
// let d3Options = ["To Schools", "To Hospitals", "To Markets", "To Primary Schools", "To Secondary Schools", "To Health Centers", "To Hospitals"];
// let d3NA = ["N/A"];
// let d4Options = ["Auto Geography", "Hex", "Village", "Admin 4", "Admin 3", "Admin 2"];
// let d5Options = ["Standard basemap", "Simple basemap", "Satellite map"];

// let dropdownList = [dropdown1, dropdown2, dropdown3, dropdown4, dropdown5];
// let optionList = [d1Options, d2Demographics, d3NA, d4Options, d5Options];

// export function updateMenu(menu, options) {

//   // remove all options from the passed menu
//   while (menu.firstChild) {
//     menu.removeChild(menu.firstChild);
//   }
//   // updates passed menu with the passed options
//   for (let i = 0; i < options.length; i++) {
//     let o = document.createElement("option");
//     o.text = options[i];
//     o.value = options[i];
//     menu.appendChild(o);
//   }
//   // handles disabling menus
//   if (dropdown1.value == "Demographics" || dropdown1.value == "Population") {
//     dropdown3.disabled = true;
//   } else {
//     dropdown3.disabled = false;
//   }
// }

// // run updateMenu for each item of dropdowns
// for (let i = 0; i < dropdownList.length; i++) {
//   updateMenu(dropdownList[i], optionList[i]);
// }

// dropdown1.value = "Demographics";
// dropdown2.value = "Male Education";
// dropdown3.value = "N/A";

// export function updateMenuState(ddList) {
//   for (let i = 0; i < 3; i++) {
//     menuState.push(ddList[i].value);
//   }
// }
// updateMenuState(dropdownList);
// updateMenu(dropdown3, d3NA);

// // update style and menus
// for (let i = 0; i < 3; i++) {
//   dropdownList[i].addEventListener("change", function () {
//     // console.log(optionList[i])
//     if (dropdown1.value == "Demographics") {
//       optionList[1] = d2Demographics;
//       optionList[2] = d3NA;
//     } else if (dropdown1.value == "Population") {
//       optionList[1] = d2Population;
//       optionList[2] = d3NA;
//     } else {
//       optionList[1] = d2TravelTime;
//       optionList[2] = d3Options;
//     }
//     console.log(optionList[1][0])
//     console.log(optionList[2][0])
//     if (i == 0) {
//       updateMenu(dropdownList[1], optionList[1]);
//       updateMenu(dropdownList[2], optionList[2]);
//       dropdown2.value = optionList[1][0]
//       dropdown3.value = optionList[2][0]
//       menuState[1] = dropdown2.value
//       menuState[2] = dropdown3.value
//     }
//     menuState[i] = dropdownList[i].value;
//     styleKey = Object.keys(styleVars.menuOptions).find((key) => JSON.stringify(styleVars.menuOptions[key]) === JSON.stringify(menuState));
//     console.log(menuState)
//     console.log(styleKey)
//     let middleVar = styleVars.quantiles[styleKey]["min"] + (styleVars.quantiles[styleKey]["max"] - styleVars.quantiles[styleKey]["min"]) / 2;
//     console.log(styleVars.quantiles[styleKey]["style"]["fill-color"])
//     map.setPaintProperty("hex-8-layer", "fill-color", styleVars.quantiles[styleKey]["style"]["fill-color"]);
//     // "fill-color": ["interpolate", ["linear"], ["get", interestVar], styleVars.quantiles[interestVar]["min"], "#f50000", middleVar, "#fff700", styleVars.quantiles[interestVar]["max"], "#12822e"],
//   });
// }

// let transSlider = document.getElementById("trans-slider");
// // add event listener to slider and update layer transparency when updated
// transSlider.addEventListener("change", function () {
//   console.log(transSlider.value)
//   map.setPaintProperty("hex-8-layer", "fill-opacity", Number(transSlider.value)/100)
// })


// let radarData = {
//   labels: ["Primary Schools", "Secondary Schools", "Health Centers", "Hospitals", "Markets"],
//   datasets: [
//     {
//       label: "Travel Time With Bridges",
//       data: [],
//       fill: "+1",
//       backgroundColor: "rgba(117, 117, 117, 0.3)",
//       borderColor: "rgb(158, 199, 163)",
//       pointBackgroundColor: "rgb(158, 199, 163)",
//       pointBorderColor: "#fff",
//       pointHoverBackgroundColor: "#fff",
//       pointHoverBorderColor: "rgb(54, 162, 235)",
//       clip: false,
//     },
//     {
//       label: "Travel Time Without Bridges",
//       data: [],
//       fill: false,
//       backgroundColor: "rgba(206, 97, 96, 0.5)",
//       borderColor: "rgb(206, 97, 96)",
//       pointBackgroundColor: "rgb(206, 97, 96)",
//       pointBorderColor: "#fff",
//       pointHoverBackgroundColor: "#fff",
//       pointHoverBorderColor: "rgb(255, 99, 132)",
//       clip: false,
//     },
//   ],
// };

// let radarConfig = {
//   type: "radar",
//   data: radarData,
//   options: {
//     scale: {
//       r: {
//         min: 0,
//         max: 120,
//       },
//       ticks: {
//         beginAtZero: true,
//         min: 0,
//         max: 120,
//         stepSize: 30,
//       },
//     },
//     elements: {
//       line: {
//         borderWidth: 3,
//       },
//     },
//     interaction: {
//       mode: "index",
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             let label = context.dataset.label || "";
//             let value1 = context.dataset.data[context.dataIndex];
//             let value = 0;
//             console.log("label is" + context.dataset.label);
//             if (label == "Travel Time With Bridges") {
//               value = Math.round(clickVars.radarData1[context.dataIndex]);
//             } else if (label == "Travel Time Without Bridges") {
//               value = Math.round(clickVars.radarData2[context.dataIndex]);
//             } else {
//               console.log("else");
//               value = context.dataset.data[context.dataIndex];
//             }
//             label += ": " + value + " minutes";
//             return label;
//           },
//         },
//       },
//     },
//   },
// };

// let pieData = {
//   labels: ["Children", "Teens", "Adult Men", "Adult Women", "Elderly"],
//   datasets: [
//     {
//       label: "Population",
//       data: [],
//       backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#B2BEB5"],
//       hoverOffset: 4,
//     },
//   ],
// };
// let pieConfig = {
//   type: "pie",
//   data: pieData,
//   options: {
//     responsive: true,
//     maintainAspectRatio: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Population",
//       },
//     },
//   },
// };

// export let radarChart = new Chart(document.getElementById("click-panel-canvas"), radarConfig);
// export let pieChart = new Chart(document.getElementById("click-panel-canvas2"), pieConfig);

// // document.getElementById("hide-button").addEventListener("click", function () {
// //   document.getElementById("control-panel").classList.add("left");
// // });

// let interestVar = "male_educational_attainment_mean";
// // console.log(styleVars.quantiles[interestVar]["max"]);
// let middleVar = styleVars.quantiles[interestVar]["min"] + (styleVars.quantiles[interestVar]["max"] - styleVars.quantiles[interestVar]["min"]) / 2;

// // on mapbox map load add home/assets/data/rwa_travel_time_hex-8-rounded.geojson
// map.on("load", function () {
//   // add home/assets/data/rwa_travel_time_hex-8-rounded.geojson
//   // make layer rwa-feb032023-8sgj6n not visible
//   map.setLayoutProperty("rwa-feb032023-8sgj6n", "visibility", "none");

//   map.addSource("hex-8-source", {
//     type: "geojson",
//     data: "./assets/data/rwa_travel_time_hex-8.geojson",
//     generateId: true,
//   });
//   map.addLayer( 
//     {
//       id: "hex-8-layer",
//       type: "fill",
//       source: "hex-8-source",
//       paint: {
//         "fill-color": styleVars.quantiles[interestVar]["style"]["fill-color"],
//         "fill-opacity": 0.5,
//         "fill-outline-color": "rgba(255, 255, 255, .1)",
//       },
//     },
//     "admin-0-boundary-disputed"
//   );
//   map.addLayer({
//     id: "hex-8-hover",
//     type: "line",
//     source: "hex-8-source",
//     paint: {
//       "line-color": "#66BEC7",
//       "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 15, 2],
//       "line-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 0.75, 0],
//     },
//   });
//   map.addLayer(
//     {
//       id: "hex-8-click",
//       type: "fill",
//       source: "hex-8-source",
//       paint: {
//         "fill-color": "#66BEC7",
//         "fill-opacity": ["case", ["boolean", ["feature-state", "click"], false], 0.8, 0],
//       },
//     },
//     "admin-0-boundary-disputed"
//   );

//   clickLayers = ["hex-8-layer"];
//   hoverLayers = ["hex-8-layer"];
//   let hoveredFeatureID = null;
//   let clickedFeatureID = null;
//   for (let i = 0; i < hoverLayers.length; i++) {
//     map.on("mousemove", hoverLayers[i], function (e) {
//       map.getCanvas().style.cursor = "pointer";
//       hoverHandler(hoverLayers[i], e.features[0]);
//       if (e.features.length > 0) {
//         if (hoveredFeatureID !== null) {
//           map.setFeatureState({ source: "hex-8-source", id: hoveredFeatureID }, { hover: false });
//         }
//         hoveredFeatureID = e.features[0].id;
//         map.setFeatureState({ source: "hex-8-source", id: hoveredFeatureID }, { hover: true });
//       }
//     });

//     map.on("mouseleave", hoverLayers[i], function (e) {
//       map.getCanvas().style.cursor = "";
//       stopHoverHandler(hoverLayers[i]);
//       if (hoveredFeatureID !== null) {
//         map.setFeatureState({ source: "hex-8-source", id: hoveredFeatureID }, { hover: false });
//       }
//       hoveredFeatureID = null;
//     });
//   }

//   for (let i = 0; i < clickLayers.length; i++) {
//     map.on("click", function (e) {
//       document.getElementById("click-panel").classList.remove("show");
//       document.getElementById("control-panel").classList.remove("left");
//       if (clickedFeatureID !== null) {
//         map.setFeatureState({ source: "hex-8-source", id: clickedFeatureID }, { click: false });
//       }
//       clickedFeatureID = null;
//     });
//     map.on("click", clickLayers[i], function (e) {
//       clickHandler(clickLayers[i], e.features[0].properties);
//       document.getElementById("control-panel").classList.add("left");
//       // console.log(e.features);
//       if (e.features.length > 0) {
//         if (clickedFeatureID !== null) {
//           map.setFeatureState({ source: "hex-8-source", id: clickedFeatureID }, { click: false });
//         }
//         clickedFeatureID = e.features[0].id;
//         map.setFeatureState({ source: "hex-8-source", id: clickedFeatureID }, { click: true });
//       }
//     });
//   }
// });