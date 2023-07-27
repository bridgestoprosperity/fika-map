export let hexData;
export let populationVar;
import Chart from "chart.js/auto";
let chartNum = 1;
// define a variable called htmlTarget and assign it to a div named chart + chartNum interpreted as a string
let htmlTarget = "chart" + chartNum.toString();

fetch("../rwa_travel_time_hex-8.geojson")
  .then((response) => response.json())
  .then((data) => {
    hexData = data; // Assign the GeoJSON data to the variable
    console.log();
    // Create a variable that is the population property of every feature in the hexData
    // populationVar = hexData.features.map((feature) => feature.properties.population);
    // for every property in hexData.features[0]["properties"] run buildHistoChart with that as the variable
    for (let property in hexData.features[0]["properties"]) {
      console.log (htmlTarget);
      buildHistoChart(property, 20, "#265B5F", 11, htmlTarget);
      console.log (htmlTarget);
      chartNum++;
      htmlTarget = "chart" + chartNum.toString();
    }


    buildHistoChart("travel_time_all_removed_fixed_education_secondary", 20, "#B2BEB5", 11, "chart1");
    buildHistoChart("population", 20, "#41008c", 11, "chart2");
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

export function buildHistoChart(variable, bucketSize, color, point, target) {
  let rawData = hexData.features.map((feature) => feature.properties[variable]);
  let populationHisto = calcHistogram(rawData, bucketSize);
  
  // Create the chart
  new Chart(document.getElementById(target), {
    type: "line",
    data: {
      datasets: [
        {
          label: variable,
          data: populationHisto,
          borderColor: color,
          borderWidth: 2,
          backgroundColor: color+"20",
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
          grid: {
            display: false,
          },
          scaleLabel: {
            display: true,
            labelString: "X Values",
          },
        },
        y: {
          display: false,
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
