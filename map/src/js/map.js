import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const testingscratch = "xyz";
mapboxgl.accessToken = "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/highestroad/cld2e2u1s000601ovq7lq77oh", // style URL
  center: [29.9289, -1.9286], // starting position [lng, lat]
  zoom: 9, // starting zoom
//   set the zoom extent of the map to the boundaries of rwanda
    maxBounds: [
        [27.56, -4.12], // Southwest coordinates
        [32.4, -0.04]  // Northeast coordinates
    ]
});

map.on("load", () => {
    // Add a new source from a mapbox tileset
    map.addSource("travel-zone-source", {
        type: "vector",
        url: "mapbox://highestroad.0vxz7v6l"
    });
    map.addSource("travel-time-hospital-source", {
        type: "vector",
        url: "mapbox://highestroad.7ho8uwtk"
    })
    // add mapbox layer
    map.addLayer(travelZoneLayer)
    map.addLayer(narrowShadowLayer)
    map.addLayer(wideShadowLayer)
});


let travelZoneLayer = {
    "id": "travel-zone-layer",
    "type": "line",
    "source": "travel-zone-source",
    "source-layer": "rwanda_subregions-cpgc0b",
    "paint": {
        "line-color": "hsl(50, 0%, 100%)",
        "line-width": [
            "interpolate",
            ["linear"],
            ["zoom"],
            6,
            0.1,
            10,
            1,
            22,
            1
        ]
    }
}

let narrowShadowLayer = {
    "id": "narrow-shadow-layer",
    "type": "line",
    "source": "travel-zone-source",
    "source-layer": "rwanda_subregions-cpgc0b",
    "minzoom": 10,
    "paint": {
        "line-color": "hsla(199, 0%, 46%, 0.2)",
        "line-width": 2,
        "line-translate": [2, 2]
    }
}

let wideShadowLayer = {
    "id": "rsub-wideshadow",
    "type": "line",
    "source": "travel-zone-source",
    "source-layer": "rwanda_subregions-cpgc0b",
    "paint": {
        "line-color": "hsla(0, 0%, 54%, 0.1)",
        "line-width": 3,
        "line-translate": [3, 3]
    }
}

export { testingscratch, map };