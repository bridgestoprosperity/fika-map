// import { BoxPlotChart } from "@sgratzl/chartjs-chart-boxplot";
import * as clickVars from "/@js/clickHandler.js";

const radarDiv = document.getElementById("radar-chart");
const barDiv = document.getElementById("bar-chart");
const pieDiv = document.getElementById("pie-chart");
export let radarChart, barChart, pieChart;
export function initializeCharts() {
  console.log("initializing charts");
  let radarData = {
    labels: ["Primary School", ["Secondary", "School"], ["Health", "Center"], "Hospital", "Market"],
    datasets: [
      {
        label: "Travel Time With All Potential Bridges",
        data: [],
        fill: "+1",
        backgroundColor: "rgba(117, 117, 117, 0.3)",
        borderColor: "rgb(48, 159, 242, 0.5)",
        pointBackgroundColor: "rgb(48, 159, 242, 0.5)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(48, 159, 242, 1)",
        clip: false,
      },
      {
        label: "Travel Time Without Bridges",
        data: [],
        fill: false,
        backgroundColor: "rgba(206, 97, 96, 0.5)",
        borderColor: "rgb(227, 63, 41, 1)",
        pointBackgroundColor: "rgb(227, 63, 41, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(227, 63, 41, 1)",
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
          max: 120,
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 120,
          stepSize: 30,
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
      // aspectRatio: 1.2,
      plugins: {
        title: {
          display: true,
          text: "Travel Time to Destinations",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              let value1 = context.dataset.data[context.dataIndex];
              let value = 0;
              console.log("label is" + context.dataset.label);
              if (label == "Travel Time With All Potential Bridges") {
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
          displayColors: false,
        },
      },
    },
  };

  let pieData = {
    // labels: ["Female", "Male",],
    datasets: [
      {
        label: ["Female 65+", "Female 50-64", "Female 15-49", "Female 10-14", "Female 5-9", "Female 0-4", "Male 0-4", "Male 5-9", "Male 10-14", "Male 15-49", "Male 50-64", "Male 65+"],
        // color order oldest -> youngest women, youngest -> oldest men
        backgroundColor: ["#330C33", "#4D124D", "#661766", "#801D80", "#992399", "#B329B3", "#29B3B3", "#239999", "#1D8080", "#176666", "#124D4D", "#0C3333"],
        borderWidth: 1,
        data: [],
        hoverOffset: 6,
      },
      {
        label: ["Female", "Male"],
        backgroundColor: ["#661766", "#186969"],
        borderWidth: 2,
        data: [],
        hoverOffset: 2,
      },
      {
        label: ["Total Population"],
        backgroundColor: ["rgb(0, 0, 0, 0.1)"],
        borderWidth: 0,
        data: [],
        hoverOffset: 0,
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
        // legend: {
        //   position: "top",
        // },
        title: {
          display: true,
          text: "Population Demographics",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              // Determine the level and label based on the dataset index
              console.log(context);
              let level = context.datasetIndex;
              console.log(pieData.datasets[level]["label"]);
              console.log(level);
              let label = pieData.datasets[context.datasetIndex]["label"][context.dataIndex];
              let label_value = context.dataset.data[context.dataIndex];
              return label + ": " + label_value;
            },
          },
        },
      },
    },
  };

  const barData = {
    labels: ["Primary school", "Secondary school", "Health center", "Hospital", "Market"],
    datasets: [
      {
        // This should be the first bar piece for all travel times
        label: "",
        data: [],
        backgroundColor: "#47474750",
      },
      {
        // This should be the actual travel time
        label: "Travel Time",
        data: [1, 1, 1, 1, 1, 1],
        backgroundColor: "#ed0000",
      },
      {
        // remainder to 100
        label: "",
        data: [],
        backgroundColor: "#47474750",
      },
    ],
  };

  const barConfig = {
    type: "bar",
    data: barData,
    options: {
      indexAxis: "y",
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Travel Time Distribution (without bridges)",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let value = context.chart.data.datasets[0].data[context.dataIndex];
              return value + "th percentile";
            },
          },
          displayColors: false,
        },
      },
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
          stacked: true,
          padding: 0,
          min: 0, // Set the minimum value to 0
          max: 100, // Set the maximum value to 100
          ticks: {
            stepSize: 50,
            callback: function (value, index, values) {
              // Define custom labels for x-axis
              var customLabels = ["Slower", "50th percentile", "Faster"];
              return customLabels[index];
            },
          },
        },
        y: {
          stacked: true,
          padding: 0,
        },
      },
      aspect: 1,
      maintainAspectRatio: true, // Disable aspect ratio to control height
      // height: "100px", // Adjust the height as needed
    },
  };

  radarChart = new Chart(radarDiv, radarConfig);
  barChart = new Chart(barDiv, barConfig);

  pieChart = new Chart(pieDiv, pieConfig);
}

export function updateCharts(radarData1, radarData2, popData1, barData1, barData2) {
  console.log("updating charts");
  radarChart.data.datasets[0].data = radarData1;
  radarChart.data.datasets[1].data = radarData2;
  pieChart.data.datasets[0].data = popData1[2];
  pieChart.data.datasets[1].data = popData1[1];
  pieChart.data.datasets[2].data = popData1[0];
  barChart.data.datasets[0].data = barData1;
  barChart.data.datasets[2].data = barData2;
  radarChart.update();
  pieChart.update();
  barChart.update();
}

function updateChartData(chart, newData) {
  chart.data.datasets[0].data = newData;
  chart.update();
}
