export function hoverHandler(layerName, feature) {
    console.log ("hoverHandler: " + layerName);
    // add the class .show to the hover-panel class in the html
    document.getElementById("hover-panel").classList.add("show");
    document.getElementById("hover-panel").innerHTML = feature.population;
}

export function stopHoverHandler(layerName) {
    document.getElementById("hover-panel").classList.remove("show");
}