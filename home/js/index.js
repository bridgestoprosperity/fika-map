import { hoverHandler } from "./hoverHandler.js";
import { stopHoverHandler } from "./hoverHandler.js";
import { clickHandler } from "./clickHandler.js";
import * as clickVars from "./clickHandler.js";

let hoverLayers = ["travel-primaryschool"];
let clickLayers = ["travel-primaryschool"];
let toggleLayers = [];
let showLayers = [];
let hideLayers = [];

mapboxgl.accessToken = "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/highestroad/clg35ltys000m01nhht5my9n3", // style URL
  center: [29.519, -1.956], // starting position [lng, lat]
  zoom: 8.2, // starting zoom
  hash: true,
});
let radarData = {
  labels: ["Primary Schools", "Secondary Schools", "Health Centers", "Hospitals", "Markets"],
  datasets: [
    {
      label: "Travel Time With Bridges",
      data: [],
      fill: "+1",
      backgroundColor: "rgba(117, 117, 117, 0.3)",
      borderColor: "rgb(158, 199, 163)",
      pointBackgroundColor: "rgb(158, 199, 163)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
      clip: false,
    },
    {
      label: "Travel Time Without Bridges",
      data: [],
      fill: false,
      backgroundColor: "rgba(206, 97, 96, 0.5)",
      borderColor: "rgb(206, 97, 96)",
      pointBackgroundColor: "rgb(206, 97, 96)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
      clip: false,
    },
  ],
};
let radarConfig = {
  type: "radar",
  data: radarData,
  options: {
    scale: {
      r: {
        min: 0,
        max: 60,
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 60,
        stepSize: 15,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    interaction: {
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            let value1 = context.dataset.data[context.dataIndex];
            let value = 0;
            console.log("label is" + context.dataset.label);
            if (label == "Travel Time With Bridges") {
              value = Math.round(clickVars.radarData1[context.dataIndex]);
            } else if (label == "Travel Time Without Bridges") {
              value = Math.round(clickVars.radarData2[context.dataIndex]);
            } else {
              console.log("else");
              value = context.dataset.data[context.dataIndex];
            }
            label += ": " + value + " minutes";
            return label;
          },
        },
      },
    },
  },
};

let pieData = {
  labels: ["Men", "Women", "Children", "Other"],
  datasets: [
    {
      label: "Population",
      data: [],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#B2BEB5"],
      hoverOffset: 4,
    },
  ],
};
let pieConfig = {
  type: "pie",
  data: pieData,
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Population",
      },
    },
  },
};



export let radarChart = new Chart(document.getElementById("click-panel-canvas"), radarConfig);
export let pieChart = new Chart(document.getElementById("click-panel-canvas2"), pieConfig);

for (let i = 0; i < hoverLayers.length; i++) {
  map.on("mousemove", hoverLayers[i], function (e) {
    // console.log the feature properties
    map.getCanvas().style.cursor = "pointer";
    hoverHandler(hoverLayers[i], e.features[0].properties);
  });
  map.on("mouseleave", hoverLayers[i], function (e) {
    map.getCanvas().style.cursor = "";
    stopHoverHandler(hoverLayers[i]);
  });
}

for (let i = 0; i < clickLayers.length; i++) {
  map.on("click", function (e) {
    document.getElementById("click-panel").classList.remove("show");
  });
  map.on("click", clickLayers[i], function (e) {
    clickHandler(clickLayers[i], e.features[0].properties);
  });
}

document.getElementById("hide-button").addEventListener("click", function () {
  document.getElementById("control-panel").classList.add("hide");
});

