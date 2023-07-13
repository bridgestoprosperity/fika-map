export default function hoverHandler(layerName, feature) {
  // console.log("hoverHandler: " + layerName);
  // add the class .show to the hover-panel class in the html
  document.getElementById("hover-panel").classList.add("show");
  document.getElementById("hover-panel").innerHTML = "Population: " + feature.properties.population;
  // console.log(feature);

  // console.log(indexVars.styleKey)
  // document.getElementById("hover-panel").innerHTML = styleVars.quantiles[indexVars.styleKey]+feature.indexVars.styleKey;
  // // create a line around the feature being hovered over
}

export function stopHoverHandler(layerName) {
  document.getElementById("hover-panel").classList.remove("show");
}
