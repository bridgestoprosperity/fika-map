


// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//     label: 'My Dataset',
//     data: [0, 10, 5, 2, 20, 30, 45],
//     fill: false,
//     borderColor: 'red',
//     tension: 0.4
//   }]
// };

// const options = {
//   responsive: true,
//   maintainAspectRatio: true,
//   scales: {
//     y: {
//       beginAtZero: true
//     }
//   }
// };

const clickPanel = document.getElementById("click-panel");
const clickPanelCanvas = document.getElementById("click-panel-canvas");
const clickPanelWords = document.getElementById("click-panel-words");
const ctx = clickPanelCanvas.getContext('2d');
let chart = null;

export function clickHandler(layerName, feature) {
  // need to do something here where the values are converted to graph values which max out at 60. 
  // the hover values will be the same as the actual values.
  // the chart scale will be set from 0, 15, 30, 60
  console.log(chart);
  if (chart !== null) {
    chart.destroy();
  }
  let data = {
    labels: ["Primary Schools", "Secondary Schools", "Health Centers", "Hospitals", "Markets"],
    datasets: [
      {
        label: "Travel Time With Bridges",
        data: [feature["travel_time"], feature["travel_time"], feature["travel_time"], feature["travel_time"], feature["travel_time"]],
        fill: "+1",
        backgroundColor: "rgba(117, 117, 117, 0.3)",
        borderColor: "rgb(158, 199, 163)",
        pointBackgroundColor: "rgb(158, 199, 163)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
      {
        label: "Travel Time Without Bridges",
        data: [feature["travel_time_all_removed"], feature["travel_time_all_removed"], feature["travel_time_all_removed"], feature["travel_time_all_removed"], feature["travel_time_all_removed"]],
        fill: false,
        backgroundColor: "rgba(206, 97, 96, 0.5)",
        borderColor: "rgb(206, 97, 96)",
        pointBackgroundColor: "rgb(206, 97, 96)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      }
    ],
  };
  let config = {
    type: "radar",
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  };
  // clickPanelWords.innerHTML = "";
  clickPanel.classList.add("show");
  let other_pop = feature["population"] - feature["women_15_49"] - feature["men_15_49"] - feature["kids_5_9"];
  // var data = [{ values: [other_pop, feature["women_15_49"], feature["men_15_49"], feature["kids_5_9"]], labels: ["Other", "Adult Women", "Adult Men", "Children"], domain: { column: 0 }, name: "Population", hoverinfo: "label+percent+name", hole: 0.4, type: "pie" }];
  // var layout = { annotations: [{ font: { size: 12 }, showarrow: false, text: "Population" }], height: 340, width: 340, showlegend: false };
  // var config = { responsive: true };
  // Plotly.newPlot("click-panel", data, layout);
  chart = new Chart(clickPanelCanvas, config);


  console.log("clickHandler: " + layerName);
  // for each property in the feature add it to the click panel
  for (var key in feature) {
    if (feature.hasOwnProperty(key)) {
      // console.log(key + " -> " + feature[key]);
      document.getElementById("words-click").innerHTML += key + " -> " + feature[key] + "<br>";
    }
    // let TESTER = document.getElementById("click-panel");
    // Plotly.newPlot(TESTER, [{ x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16] }], { margin: { t: 0 } });
    // /* Current Plotly.js version */
    // console.log(Plotly.BUILD);
  }
}
