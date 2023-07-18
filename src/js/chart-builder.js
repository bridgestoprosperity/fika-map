export let hexData;
export let populationVar;
import Chart from "chart.js/auto";

fetch("../rwa_travel_time_hex-8.geojson")
  .then((response) => response.json())
  .then((data) => {
    hexData = data; // Assign the GeoJSON data to the variable
    console.log(hexData);
    // Create a variable that is the population property of every feature in the hexData
    // populationVar = hexData.features.map((feature) => feature.properties.population);
    buildHistoChart("travel_time_all_removed_fixed_education_secondary", 20, "#B2BEB5", 11, "chart");
  })
  .catch((error) => {
    console.error("Error fetching GeoJSON:", error);
  });

// Wait 2 seconds for the data to load, then create the chart
// const DATA_COUNT = 12;
export function calcHistogram(variable, bucketSize) {
  var rangeCounts = {};

  variable.forEach(function (value) {
    var range = Math.floor(value / bucketSize) * bucketSize;
    if (range in rangeCounts) {
      rangeCounts[range] += 1;
    } else {
      rangeCounts[range] = 1;
    }
  });

  var result = [];
  for (var range in rangeCounts) {
    result.push({ x: parseInt(range) + bucketSize, y: rangeCounts[range] });
  }

  return result;
}

function buildHistoChart(variable, bucketSize, color, point, target) {
  let rawData = hexData.features.map((feature) => feature.properties[variable]);
  let populationHisto = calcHistogram(rawData, bucketSize);
  
  // Create the chart
  new Chart(document.getElementById(target), {
    type: "line",
    data: {
      datasets: [
        {
          label: "Population",
          data: populationHisto,
          borderColor: "#B2BEB5",
          borderWidth: 2,
          // backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
          tension: 0.1,
          pointStyle: false,
          cubicInterpolationMode: "monotone",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          type: "linear",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "X Values",
          },
        },
        y: {
          display: true,
          beginAtZero: false,
          scaleLabel: {
            display: false,
            labelString: "Y Values",
          },
        },
      },
    },
  });
}
