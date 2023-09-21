import { map } from "../../main.js";
import { menuState } from "../../main.js";
import { dataMap } from "./dataMap.js";
import { impactCalc } from "./dataMap.js";


let pointLayers = ["bridge-point", "health-point", "edu-point"];
let hexFeatureID = null;

// export const hoverMenuLanguage = {
//   "h3-index": ["H3 Index", ""],
//   row_col: ["Row/Col", ""],
//   x_y: ["X/Y", ""],
//   population: ["Population", "people"],
//   kids_0_9: ["Children 0-9", "people"],
//   kids_5_9: ["Children 5-9", "people"],
//   kids_10_14: ["Children 10-14", "people"],
//   males_15_49: ["Males 15-49", "people"],
//   females_15_49: ["Females 15-49", "people"],
//   people_65_plus: ["Adults 65+", "people"],
//   pregnancies: ["Pregnancies", ""],
//   births: ["Births", ""],
//   rwi: ["Relative Wealth Index", ""],
//   underweight: ["Underweight", ""],
//   female_educational_attainment_mean: ["Avg. Female Education", "years"],
//   male_educational_attainment_mean: ["Avg. Male Education", "years"],
//   time_delta_all_removed_fixed_education_all: ["Bridges Reduce Time", "minutes"],
//   time_delta_all_removed_fixed_education_primary: ["Bridges Reduce Time by", "minutes"],
//   time_delta_all_removed_fixed_education_secondary: ["Bridges Reduce Time by", "minutes"],
//   time_delta_all_removed_fixed_markets: ["Bridges Reduce Time by", "minutes"],
//   time_delta_all_removed_optimal_health_all: ["Bridges Reduce Time by", "minutes"],
//   time_delta_all_removed_optimal_health_centers: ["Bridges Reduce Time by", "minutes"],
//   time_delta_all_removed_optimal_health_major:["Bridges Reduce Time by", "minutes"],
//   time_delta_all_removed_optimal_markets: ["Bridges Reduce Time by", "minutes"],
//   travel_time_all_removed_fixed_education_all: ["Travel Time to any School", "minutes"],
//   travel_time_all_removed_fixed_education_primary: ["Travel Time to Primary School", "minutes"],
//   travel_time_all_removed_fixed_education_secondary: ["Travel Time to Secondary School", "minutes"],
//   travel_time_all_removed_fixed_markets: ["Travel Time to Market", "minutes"],
//   travel_time_all_removed_optimal_health_all: ["Travel Time to any Healthcare", "minutes"],
//   travel_time_all_removed_optimal_health_centers: ["Travel Time to Health Center", "minutes"],
//   travel_time_all_removed_optimal_health_major: ["Travel Time to Hospital", "minutes"],
//   travel_time_all_removed_optimal_markets: ["Travel Time to Market", "minutes"],
//   travel_time_education_all: ["Travel Time to any School", "minutes"],
//   travel_time_education_primary: ["Travel Time to Primary School", "minutes"],
//   travel_time_education_secondary: ["Travel Time to Secondary School", "minutes"],
//   travel_time_health_all: ["Travel Time to any Healthcare", "minutes"],
//   travel_time_health_centers: ["Travel Time to Health Center", "minutes"],
//   travel_time_health_major: ["Travel Time to Hospital", "minutes"],
//   travel_time_markets: ["Travel Time to Market", "minutes"],
// };


function resetFilters() {
  map.setFilter("hover-bridge", ["==", ["id"], 0]);
  map.setFilter("hover-health", ["==", ["id"], 0]);
  map.setFilter("hover-edu", ["==", ["id"], 0]);
  map.setFeatureState({ source: "hex-8-source", id: hexFeatureID }, { hover: false });
  document.getElementById("hover-panel").classList.remove("show");
}
function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

export default function hoverHandler(layerName, feature) {
  let styleKey = Object.keys(dataMap).find((key) => JSON.stringify(dataMap[key][0]) === JSON.stringify([menuState.dropdown1, menuState.dropdown2, menuState.dropdown3]));
  resetFilters();
  if (feature) {
    document.getElementById("hover-panel").classList.add("show");
  }
  if (layerName === "hex-8-layer" && feature) {
    if (hexFeatureID !== null) {
      map.setFeatureState({ source: "hex-8-source", id: hexFeatureID }, { hover: false });
    }
    hexFeatureID = feature.id;
    map.setFeatureState({ source: "hex-8-source", id: hexFeatureID }, { hover: true });
    if (styleKey == "female_educational_attainment_mean" || styleKey == "male_educational_attainment_mean" || styleKey == "rwi") {
      document.getElementById("hover-text").innerHTML = "<strong>Geographic Area</strong> </br>Population: " + feature.properties.population + "</br>Wealth Index: " + (feature.properties.rwi).toFixed(3) + "</br>" + dataMap[styleKey][1][0] + ": "+ (feature.properties[styleKey]).toFixed(1) + " " + dataMap[styleKey][1][1];

    }
    else if (styleKey.includes("impact")) {
      document.getElementById("hover-text").innerHTML = "<strong>Geographic Area</strong> </br>Population: " + feature.properties.population + "</br>RWI: " + (feature.properties.rwi).toFixed(3) + "</br>" + dataMap[styleKey][1][0] + ": "+ impactCalc((feature.properties[styleKey]).toFixed(1)) + " " + dataMap[styleKey][1][1];

    }
    else {
      document.getElementById("hover-text").innerHTML = "<strong>Geographic Area</strong> </br>Population: " + feature.properties.population + "</br>Wealth Index: " + (feature.properties.rwi).toFixed(3) + "</br>" + dataMap[styleKey][1][0] + ": "+ (feature.properties[styleKey]).toFixed(0) + " " + dataMap[styleKey][1][1];

    }
    document.getElementById("hover-icon").src = "/assets/geo-hex.svg";

  } else if (layerName === "bridge-point" && feature) {
    map.setFilter("hover-bridge", ["==", ["id"], feature["id"]]);
    document.getElementById("hover-text").innerHTML = "<strong>Bridge Site</strong> </br>Status: " + feature.properties.stage_public + " Site </br>Region: " + feature.properties.level_2_government + "</br>Population Served: " + feature.properties.individuals_directly_served;
    document.getElementById("hover-icon").src = "/assets/bridge-hex.svg";
  } else if (layerName === "health-point" && feature) {
    map.setFilter("hover-health", ["==", ["id"], feature["id"]]);
    document.getElementById("hover-text").innerHTML = "<strong>"+toTitleCase(feature.properties.category)+"</strong> </br>District: " + toTitleCase(feature.properties.district) + "</br> Sector: " + toTitleCase(feature.properties.sector) + "</br> Village: " + toTitleCase(feature.properties.village);
    document.getElementById("hover-icon").src = "/assets/health-hex.svg";
  } else if (layerName === "edu-point" && feature) {
    map.setFilter("hover-edu", ["==", ["id"], feature["id"]]);
    document.getElementById("hover-text").innerHTML = "<strong>"+toTitleCase(feature.properties.category)+"</strong> </br>District: " + toTitleCase(feature.properties.district) + "</br> Sector: " + toTitleCase(feature.properties.sector) + "</br> Village: " + toTitleCase(feature.properties.village);
    document.getElementById("hover-icon").src = "/assets/edu-hex.svg";
  }
}

export function stopHoverHandler(layerName) {
  document.getElementById("hover-panel").classList.remove("show");
  console.log("stopHoverHandler running");
  // FIGURE THIS OUT 
  if (layerName === "hex-8-layer") {
    map.setFeatureState({ source: "hex-8-source", id: hexFeatureID }, { hover: false });
    hexFeatureID = null;
  }
  // FIGURE THIS OUT ^
  if (layerName === "hover-bridge") {
    console.log("stopHoverHandler: bridge-point");
    map.setFilter("hover-bridge", ["==", ["id"], 0]);
  }
  if (layerName === "hover-health") {
    console.log("stopHoverHandler: health-point");
    map.setFilter("hover-health", ["==", ["id"], 0]);
  }
  if (layerName === "hover-edu") {
    console.log("stopHoverHandler: edu-point");
    map.setFilter("hover-edu", ["==", ["id"], 0]);
  } else {
    console.log("stopHoverHandler: " + layerName + " not recognized");
  }
}

