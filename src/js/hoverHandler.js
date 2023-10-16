import { map } from "../../main.js";
import { menuState } from "../../main.js";
import { dataMap } from "./dataMap.js";
import { impactCalc } from "./dataMap.js";


let pointLayers = ["bridge-point", "health-point", "edu-point"];
let hexFeatureID = null;


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
    console.log(feature.properties.opportunity_name)
    document.getElementById("hover-text").innerHTML = "<strong>Bridge Site </strong>" + feature.properties.opportunity_name.split('-')[2].trim()+"</br>Status: " + feature.properties.stage_public + " Site </br>Region: " + feature.properties.level_2_government + "</br>Population Served: " + feature.properties.individuals_directly_served;
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

