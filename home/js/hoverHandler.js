export function hoverHandler(layerName, feature) {
  
  console.log("hoverHandler: " + layerName);
  // add the class .show to the hover-panel class in the html
  document.getElementById("hover-panel").classList.add("show");
  document.getElementById("hover-panel").innerHTML = "Population: "+feature.population;
  // create a line around the feature being hovered over

}

export function stopHoverHandler(layerName) {
  document.getElementById("hover-panel").classList.remove("show");
}


