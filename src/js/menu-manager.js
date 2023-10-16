import { map } from "../../main.js";

export let menuOptions = {
  dropdown1: ["Impact", "Travel Time", "Demographics", "Population",],
  dropdown2: {
    Demographics: ["Pregnancies", "Births", "Relative Wealth Index", "Underweight", "Female Education", "Male Education"],
    Population: ["All", "Children 0-4", "Children 5-9", "Children 0-9", "Youth 10-14", "People 15-49", "People 50-64", "People 65+", "Female 0-4", "Female 5-9", "Female 0-9", "Female 10-14", "Female 15-49", "Female 50-64", "Female 65+", "Male 0-4", "Male 5-9", "Male 0-9", "Male 10-14", "Male 15-49", "Male 50-64", "Male 65+"],
    Impact: ["Potential Impact", "Current Impact"],
    TravelTime: ["With All Bridges", "With Constructed Bridges", "Without Bridges"],
  },
  dropdown3: {
    Demographics: ["N/A"],
    Population: ["N/A"],
    Impact: ["All", "School", "Healthcare", "Market", "Primary School", "Secondary School", "Health Post", "Health Center", "Major Hospital"],
    TravelTime: ["To School", "To Healthcare", "To Market","To Primary School", "To Secondary School", "To Health Post", "To Health Center", "To Hospital"],
  },
  dropdown4: ["Standard map", "Satellite"],
};

export function updateMenu(choices, menu) {
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }
  for (let i = 0; i < choices.length; i++) {
    let o = document.createElement("option");
    o.text = choices[i];
    o.value = choices[i];
    menu.appendChild(o);
    if (choices[i] == "N/A") {
      menu.disabled = true;
    } else {
      menu.disabled = false;
    }
  }
}
export function updateBaselayer(selection) {
  console.log(selection);
  if (selection == "Standard map") {
    let hideLayers = ['satellite-base'];
    let showLayers = ['land', 'national-park', 'landuse', 'pitch-outline', 'waterway', 'water', 'water-pattern', 'mapbox-mapbox-terrain-dem-v1', 'land-structure-polygon', 'land-structure-line', 'aeroway-polygon', 'aeroway-line', 'tunnel-simple', 'road-simple', 'bridge-case-simple', 'bridge-simple', 'building-extrusion', 'admin-1-boundary-bg', 'admin-0-boundary-bg', 'admin-1-boundary', 'admin-0-boundary', 'admin-0-boundary-disputed', 'satellite-light', 'building-entrance', 'building-number-label', 'block-number-label', 'road-label-simple' , 'waterway-label', 'natural-line-label', 'natural-point-label', 'water-line-label', 'water-point-label', 'poi-label', 'transit-label', 'airport-label', 'settlement-subdivision-label', 'settlement-minor-label', 'settlement-major-label', 'state-label'];
    for (let i = 0; i < hideLayers.length; i++) {
      map.setLayoutProperty(hideLayers[i], 'visibility', 'none');
    }
    for (let i = 0; i < showLayers.length; i++) {
      map.setLayoutProperty(showLayers[i], 'visibility', 'visible');
    }
  }
  else {
    let hideLayers = ['land', 'national-park', 'landuse', 'pitch-outline', 'waterway', 'water', 'water-pattern', 'mapbox-mapbox-terrain-dem-v1', 'land-structure-polygon', 'land-structure-line', 'aeroway-polygon', 'aeroway-line', 'tunnel-simple', 'road-simple', 'bridge-case-simple', 'bridge-simple', 'building-extrusion', 'admin-1-boundary-bg', 'admin-0-boundary-bg', 'admin-1-boundary', 'admin-0-boundary', 'admin-0-boundary-disputed', 'satellite-light', 'building-entrance', 'building-number-label', 'block-number-label', 'road-label-simple' , 'waterway-label', 'natural-line-label', 'natural-point-label', 'water-line-label', 'water-point-label', 'poi-label', 'transit-label', 'airport-label', 'settlement-subdivision-label', 'settlement-minor-label', 'settlement-major-label', 'state-label'];
    let showLayers = ['satellite-base'];
    for (let i = 0; i < hideLayers.length; i++) {
      map.setLayoutProperty(hideLayers[i], 'visibility', 'none');
    }
    for (let i = 0; i < showLayers.length; i++) {
      map.setLayoutProperty(showLayers[i], 'visibility', 'visible');
    }
  }
}