var data = [
  {
    values: [other_pop, feature["women_15_49"], feature["men_15_49"], feature["kids_5_9"]],
    labels: ["Other", "Adult Women", "Adult Men", "Children"],
    domain: { column: 0 },
    name: "Population",
    hoverinfo: "label+percent+name",
    hole: 0.4,
    type: "pie",
  }
];

var layout = {
//   title: "Global Emissions 1990-2011",
  annotations: [
    {
      font: {
        size: 12,
      },
      showarrow: false,
      text: "Population",
      x: 0.17,
      y: 0.5,
    }
  ],
  height: 400,
  width: 600,
  showlegend: false,
//   grid: { rows: 1, columns: 2 },
};

Plotly.newPlot("myDiv", data, layout);
