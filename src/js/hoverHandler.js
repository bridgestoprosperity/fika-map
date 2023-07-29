import { map } from "../../main.js";
let pointLayers = ["bridge-point", "health-point", "edu-point"];
let hexFeatureID = null;
export default function hoverHandler(layerName, feature) {
  map.setFilter("hover-bridge", ["==", "all_education_facilities_index", 0]);
  map.setFilter("hover-health", ["==", "all_education_facilities_index", 0]);
  map.setFilter("hover-edu", ["==", "all_education_facilities_index", 0]);

  if (layerName === "hex-8-layer") {
    if (feature) {
      if (hexFeatureID !== null) {
        map.setFeatureState({ source: "hex-8-source", id: hexFeatureID }, { hover: false });
      }
      hexFeatureID = feature.id;
      map.setFeatureState({ source: "hex-8-source", id: hexFeatureID }, { hover: true });
    }
    if (feature) {
      document.getElementById("hover-panel").classList.add("show");
      document.getElementById("hover-panel").innerHTML = "Population: " + feature.properties.population;
    } else {
      document.getElementById("hover-panel").classList.remove("show");
    }
  }
  if (pointLayers.includes(layerName)) {
    let hoverCategory = layerName.split("-")[0];
    if (hoverCategory == "edu") {
      map.setFilter("hover-" + hoverCategory, ["==", "all_education_facilities_index", feature.properties.all_education_facilities_index]);
      document.getElementById("hover-panel").classList.add("show");
      document.getElementById("hover-panel").innerHTML = "Type: " + hoverCategory;
    }
    if (hoverCategory == "health") {
      map.setFilter("hover-" + hoverCategory, ["==", "all_health_facilities_index", feature.properties.all_health_facilities_index]);
      document.getElementById("hover-panel").classList.add("show");
      document.getElementById("hover-panel").innerHTML = "Type: " + hoverCategory;
    }
    if (hoverCategory == "bridge") {
      map.setFilter("hover-" + hoverCategory, ["==", "longitude", feature.properties.longitude]);
      document.getElementById("hover-panel").classList.add("show");
      document.getElementById("hover-panel").innerHTML = "Type: " + hoverCategory;
    }
  }
}

export function stopHoverHandler(layerName) {
  document.getElementById("hover-panel").classList.remove("show");
  if (hexFeatureID !== null) {
    map.setFeatureState({ source: "hex-8-source", id: hexFeatureID }, { hover: false });
  }
  hexFeatureID = null;
  if (pointLayers.includes(layerName)) {
    let hoverCategory = layerName.split("-")[0];
    map.setFilter("hover-" + hoverCategory, ["==", "all_education_facilities_index", 0]);
  }
}
