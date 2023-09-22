import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';
const radarDiv = document.getElementById("radar-chart");
const boxDiv = document.getElementById("box-plot");
const pieDiv = document.getElementById("pie-chart");
export let radarChart, boxPlot, pieChart;
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
        },
      },
    },
  };

  let pieData = {
    // labels: ["Female", "Male",],
    datasets: [
      {
        label: ["Female 65+", "Female 50-64", "Female 15-49", "Female 10-14", "Female 5-9", "Female 0-4", "Male 0-4", "Male 5-9", "Male 10-14", "Male 15-49", "Male 50-64", "Male 65+",],
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
              console.log(context)
              let level = context.datasetIndex;
              console.log(pieData.datasets[level]['label'])
              console.log(level)
              let label = pieData.datasets[context.datasetIndex]['label'][context.dataIndex]
              let label_value = context.dataset.data[context.dataIndex];
              return label+": "+label_value;
            },
          },
        },
      },
    },
  };

  function randomValues(count, min, max) {
    const delta = max - min;
    return Array.from({length: count}).map(() => Math.random() * delta + min);
  }
  
  let boxData = {
    // define label tree
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: 'rgba(255,0,0,0.5)',
      borderColor: 'red',
      borderWidth: 1,
      outlierColor: '#999999',
      padding: 10,
      itemRadius: 0,
      data: [
        randomValues(100, 0, 100),
        randomValues(100, 0, 20),
        randomValues(100, 20, 70),
        randomValues(100, 60, 100),
        randomValues(40, 50, 100),
        randomValues(100, 60, 120),
        randomValues(100, 80, 100)
      ]
    }, {
      label: 'Dataset 2',
      backgroundColor:  'rgba(0,0,255,0.5)',
      borderColor: 'blue',
      borderWidth: 1,
      outlierColor: '#999999',
      padding: 10,
      itemRadius: 0,
      data: [
        randomValues(100, 60, 100),
        randomValues(100, 0, 100),
        randomValues(100, 0, 20),
        randomValues(100, 20, 70),
        randomValues(40, 60, 120),
        randomValues(100, 20, 100),
        randomValues(100, 80, 100)
      ]
    }]
  };
  let boxConfig = {
    type: 'boxplot',
    data: boxData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Box Plot Chart'
      }
    }
  }

  radarChart = new Chart(radarDiv, radarConfig);
  // boxPlot = new BoxPlotChart(boxDiv, boxConfig);
  
  pieChart = new Chart(pieDiv, pieConfig);
}

export function updateCharts(radarData1, radarData2, popData1) {
  console.log("updating charts");
  radarChart.data.datasets[0].data = radarData1;
  radarChart.data.datasets[1].data = radarData2;
  pieChart.data.datasets[0].data = popData1[2];
  pieChart.data.datasets[1].data = popData1[1];
  pieChart.data.datasets[2].data = popData1[0];
  radarChart.update();
  pieChart.update();
}

// const ctx = document.getElementById("myChart");

// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

function updateChartData(chart, newData) {
  chart.data.datasets[0].data = newData;
  chart.update();
}
