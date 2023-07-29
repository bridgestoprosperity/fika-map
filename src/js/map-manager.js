import { map } from "../../main.js";

export const palettes = {
  inferno: ["#000004", "#57106e", "#bc3754", "#f98e09", "#fcffa4"],
  magma: ["#000004", "#51127c", "#b73779", "#fc8961", "#fcfdbf"],
  plasma: ["#0d0887", "#7e03a8", "#cc4778", "#f89540", "#f0f921"],
  viridis: ["#440154", "#3b528b", "#21918c", "#5ec962", "#fde725"],
  cividis: ["#002051", "#3c4d6e", "#7f7c75", "#bbaf71", "#fdea45"],
  turbo: ["#23171b", "#26bce1", "#95fb51", "#ff821d", "#900c00"],
  warm: ["#6e40aa", "#d23ea7", "#ff5e63", "#efa72f", "#aff05b"],
  cool: ["#6e40aa", "#417de0", "#1ac7c2", "#40f373", "#aff05b"],
  // sequential single
  blues: ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"],
  greens: ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"],
  grays: ["#f7f7f7", "#cccccc", "#969696", "#636363", "#252525"],
  oranges: ["#feedde", "#fdbe85", "#fd8d3c", "#e6550d", "#a63603"],
  purples: ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#756bb1", "#54278f"],
  reds: ["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"],
  // sequential multi
  bugn: ["#edf8fb", "#b2e2e2", "#66c2a4", "#2ca25f", "#006d2c"],
  bupu: ["#edf8fb", "#b3cde3", "#8c96c6", "#8856a7", "#810f7c"],
  gnbu: ["#f0f9e8", "#bae4bc", "#7bccc4", "#43a2ca", "#0868ac"],
  orrd: ["#fee8c8", "#fdbb84", "#e34a33", "#b30000"],
  pubu: ["#f1eef6", "#bdc9e1", "#74a9cf", "#2b8cbe", "#045a8d"],
  pubugn: ["#f6eff7", "#bdc9e1", "#67a9cf", "#1c9099", "#016c59"],
  puor: ["#f1a340", "#f7f7f7", "#998ec3", "#762a83"],
  purd: ["#e7e1ef", "#c994c7", "#dd1c77", "#980043"],
  rdpu: ["#feebe2", "#fbb4b9", "#f768a1", "#c51b8a", "#7a0177"],
  ylgn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#31a354"],
  ylgnbu: ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"],
  ylorbr: ["#ffffe5", "#fff7bc", "#fec44f", "#d95f0e", "#993404"],
  ylorrd: ["#ffffb2", "#fecc5c", "#fd8d3c", "#f03b20", "#bd0026"],
  // diverging
  brbg: ["#a6611a", "#dfc27d", "#f5f5f5", "#80cdc1", "#018571"],
  prgn: ["#7b3294", "#c2a5cf", "#f7f7f7", "#a6dba0", "#008837"],
  piyg: ["#d01c8b", "#f1b6da", "#f7f7f7", "#b8e186", "#4dac26"],
  puor: ["#5e3c99", "#b2abd2", "#f7f7f7", "#fdb863", "#e66101"],
  rdbu: ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"],
  rdgy: ["#ca0020", "#f4a582", "#ffffff", "#bababa", "#404040"],
  rdylbu: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"],
  rdylgn: ["#d7191c", "#fdae61", "#ffffbf", "#a6d96a", "#1a9641"],
  spectral: ["#d7191c", "#fdae61", "#ffffbf", "#abdda4", "#2b83ba"],
  // cyclical
  rainbow: ["#6e40aa", "#ff5e63", "#aff05b", "#1ac7c2", "#6e40aa"],
  sinebow: ["#ff4040", "#7fee11", "#00bfbf", "#7f11ee", "#ff4040"],
  // categorical
  tableau10: ["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab"],
  category10: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
  pastel: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"],
};

export const menuOptions = {
  "h3-index": ["N/A"],
  row_col: ["N/A"],
  x_y: ["N/A"],
  population: ["Population", "All", "N/A"],
  kids_0_9: ["Population", "Children 0-9", "N/A"],
  kids_5_9: ["Population", "Children 5-9", "N/A"],
  kids_10_14: ["Population", "Children 10-14", "N/A"],
  males_15_49: ["Population", "Male 15-49", "N/A"],
  females_15_49: ["Population", "Female 15-49", "N/A"],
  people_65_plus: ["Population", "Adults 65+", "N/A"],
  pregnancies: ["Demographics", "Pregnancies", "N/A"],
  births: ["Demographics", "Births", "N/A"],
  rwi: ["Demographics", "RWI", "N/A"],
  underweight: ["Demographics", "Underweight", "N/A"],
  female_educational_attainment_mean: ["Demographics", "Female Education", "N/A"],
  male_educational_attainment_mean: ["Demographics", "Male Education", "N/A"],
  time_delta_all_removed_fixed_education_all: ["Impact", "Potential Impact", "Schools"],
  time_delta_all_removed_fixed_education_primary: ["Impact", "Potential Impact", "Primary Schools"],
  time_delta_all_removed_fixed_education_secondary: ["Impact", "Potential Impact", "Secondary Schools"],
  time_delta_all_removed_fixed_markets: ["N/A"],
  time_delta_all_removed_optimal_health_all: ["Impact", "Potential Impact", "Healthcare"],
  time_delta_all_removed_optimal_health_centers: ["Impact", "Potential Impact", "Health Centers"],
  time_delta_all_removed_optimal_health_major: ["Impact", "Potential Impact", "Hospitals"],
  time_delta_all_removed_optimal_markets: ["Impact", "Potential Impact", "Markets"],
  travel_time_all_removed_fixed_education_all: ["Travel Time", "Without Bridges", "To Schools"],
  travel_time_all_removed_fixed_education_primary: ["Travel Time", "Without Bridges", "To Primary Schools"],
  travel_time_all_removed_fixed_education_secondary: ["Travel Time", "Without Bridges", "To Secondary Schools"],
  travel_time_all_removed_fixed_markets: ["N/A"],
  travel_time_all_removed_optimal_health_all: ["Travel Time", "Without Bridges", "To Healthcare"],
  travel_time_all_removed_optimal_health_centers: ["Travel Time", "Without Bridges", "To Health Centers"],
  travel_time_all_removed_optimal_health_major: ["Travel Time", "Without Bridges", "To Hospitals"],
  travel_time_all_removed_optimal_markets: ["Travel Time", "Without Bridges", "To Markets"],
  travel_time_education_all: ["Travel Time", "With Bridges", "To Schools"],
  travel_time_education_primary: ["Travel Time", "With Bridges", "To Primary Schools"],
  travel_time_education_secondary: ["Travel Time", "With Bridges", "To Secondary Schools"],
  travel_time_health_all: ["Travel Time", "With Bridges", "To Healthcare"],
  travel_time_health_centers: ["Travel Time", "With Bridges", "To Health Centers"],
  travel_time_health_major: ["Travel Time", "With Bridges", "To Hospitals"],
  travel_time_markets: ["Travel Time", "With Bridges", "To Markets"],
};

export const quantiles = {
  population: {
    mean: 691.3138206960846,
    median: 573.0,
    min: 0,
    max: 20055,
    percentiles: [0, 179.0, 311.0, 410.0, 496.0, 573.0, 654.0, 750.0, 890.0, 1156.0, 20055],
    color: palettes.magma,
  },
  kids_0_9: {
    mean: 177.17235083903046,
    median: 148.0,
    min: 0,
    max: 4887,
    percentiles: [0, 46.0, 80.0, 106.0, 127.0, 148.0, 169.0, 194.0, 231.0, 302.0, 4887],
    color: palettes.magma,
  },
  kids_5_9: {
    mean: 94.67942044748291,
    median: 79.0,
    min: 0,
    max: 2411,
    percentiles: [0, 25.0, 43.0, 57.0, 68.0, 79.0, 91.0, 105.0, 124.0, 162.0, 2411],
    color: palettes.magma,
  },
  kids_10_14: {
    mean: 89.09870261031696,
    median: 75.0,
    min: 0,
    max: 1935,
    percentiles: [0, 23.0, 40.0, 53.0, 64.0, 75.0, 85.0, 98.0, 117.0, 154.0, 1935],
    color: palettes.magma,
  },
  males_15_49: {
    mean: 176.66508701056557,
    median: 138.0,
    min: 1,
    max: 7390,
    percentiles: [1, 43.0, 75.0, 99.0, 119.0, 138.0, 158.0, 182.0, 216.0, 288.0, 7390],
    color: palettes.magma,
  },
  females_15_49: {
    mean: 177.8094313238036,
    median: 148.0,
    min: 1,
    max: 5224,
    percentiles: [1, 46.0, 79.0, 106.0, 128.0, 148.0, 169.0, 194.0, 230.0, 298.0, 5224],
    color: palettes.magma,
  },
  people_65_plus: {
    mean: 18.14791796146675,
    median: 16.0,
    min: 0,
    max: 275,
    percentiles: [0, 4.0, 8.0, 11.0, 14.0, 16.0, 18.0, 21.0, 25.0, 32.0, 275],
    color: palettes.magma,
  },
  time_delta_all_removed_fixed_education_all: {
    mean: 3.0391159105034182,
    median: 0.0,
    min: 0,
    max: 1172,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1172],
    color: palettes.magma,
  },
  time_delta_all_removed_fixed_education_primary: {
    mean: 3.495105655686762,
    median: 0.0,
    min: 0,
    max: 1172,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1172],
    color: palettes.magma,
  },
  time_delta_all_removed_fixed_education_secondary: {
    mean: 5.436373523927905,
    median: 0.0,
    min: 0,
    max: 1242,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1242],
    color: palettes.magma,
  },
  time_delta_all_removed_fixed_markets: {
    mean: 14.47739279055314,
    median: 0.0,
    min: 0,
    max: 1249,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 12.0, 31.0, 1249],
    color: palettes.magma,
  },
  time_delta_all_removed_optimal_health_all: {
    mean: 1.4368784959602237,
    median: 0.0,
    min: 0,
    max: 235,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 235],
    color: palettes.magma,
  },
  time_delta_all_removed_optimal_health_centers: {
    mean: 2.4074347420758233,
    median: 0.0,
    min: 0,
    max: 243,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 243],
    color: palettes.magma,
  },
  time_delta_all_removed_optimal_health_major: {
    mean: 9.765343380981976,
    median: 0.0,
    min: 0,
    max: 469,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.0, 26.0, 469],
    color: palettes.magma,
  },
  time_delta_all_removed_optimal_markets: {
    mean: 9.51180857675575,
    median: 0.0,
    min: 0,
    max: 445,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 12.0, 28.0, 445],
    color: palettes.magma,
  },
  travel_time_all_removed_fixed_education_all: {
    mean: 64.56207271597265,
    median: 47.0,
    min: 0,
    max: 1421,
    percentiles: [0, 18.0, 26.0, 33.0, 40.0, 47.0, 54.0, 64.0, 78.0, 109.0, 1421],
    color: palettes.rdylgn,
  },
  travel_time_all_removed_fixed_education_primary: {
    mean: 69.13680857675575,
    median: 50.0,
    min: 0,
    max: 1421,
    percentiles: [0, 20.0, 29.0, 36.0, 43.0, 50.0, 59.0, 69.0, 85.0, 119.0, 1421],
    color: palettes.rdylgn,
  },
  travel_time_all_removed_fixed_education_secondary: {
    mean: 96.96678837787445,
    median: 75.0,
    min: 5,
    max: 1467,
    percentiles: [5, 27.0, 40.0, 52.0, 63.0, 75.0, 87.0, 103.0, 126.0, 169.0, 1467],
    color: palettes.rdylgn,
  },
  travel_time_all_removed_fixed_markets: {
    mean: 349.8364667495339,
    median: 309.5,
    min: 7,
    max: 1806,
    percentiles: [7, 109.0, 162.0, 211.0, 259.0, 309.5, 364.0, 426.0, 506.0, 635.0, 1806],
    color: palettes.rdylgn,
  },
  travel_time_all_removed_optimal_health_all: {
    mean: 85.76064325668116,
    median: 73.0,
    min: 0,
    max: 1468,
    percentiles: [0, 29.0, 42.0, 53.0, 63.0, 73.0, 84.0, 97.0, 113.0, 141.0, 1468],
    color: palettes.rdylgn,
  },
  travel_time_all_removed_optimal_health_centers: {
    mean: 119.61839651957737,
    median: 104.0,
    min: 7,
    max: 1432,
    percentiles: [7, 42.0, 60.0, 76.0, 90.0, 104.0, 119.0, 136.0, 159.0, 198.0, 1432],
    color: palettes.rdylgn,
  },
  travel_time_all_removed_optimal_health_major: {
    mean: 368.2246348663766,
    median: 344.5,
    min: 11,
    max: 1800,
    percentiles: [11, 142.0, 204.0, 254.0, 300.0, 344.5, 389.0, 438.0, 504.0, 611.0, 1800],
    color: palettes.rdylgn,
  },
  travel_time_all_removed_optimal_markets: {
    mean: 344.69771597265384,
    median: 308.0,
    min: 7,
    max: 1806,
    percentiles: [7, 109.0, 162.0, 211.0, 259.0, 308.0, 362.0, 423.0, 500.0, 622.0, 1806],
    color: palettes.rdylgn,
  },
  travel_time_education_all: {
    mean: 61.47743163455562,
    median: 46.0,
    min: 0,
    max: 1421,
    percentiles: [0, 18.0, 26.0, 33.0, 39.0, 46.0, 53.0, 62.0, 75.0, 101.0, 1421],
    color: palettes.rdylgn,
  },
  travel_time_education_primary: {
    mean: 65.5924875699192,
    median: 49.0,
    min: 0,
    max: 1421,
    percentiles: [0, 20.0, 28.0, 36.0, 42.0, 49.0, 57.0, 67.0, 81.0, 110.0, 1421],
    color: palettes.rdylgn,
  },
  travel_time_education_secondary: {
    mean: 91.46616687383468,
    median: 73.0,
    min: 5,
    max: 1467,
    percentiles: [5, 27.0, 40.0, 51.0, 62.0, 73.0, 85.0, 99.0, 119.0, 156.0, 1467],
    color: palettes.rdylgn,
  },

  travel_time_health_all: {
    mean: 84.27423865755128,
    median: 72.0,
    min: 0,
    max: 1468,
    percentiles: [0, 29.0, 42.0, 52.0, 62.0, 72.0, 83.0, 95.0, 111.0, 137.0, 1468],
    color: palettes.rdylgn,
  },
  travel_time_health_centers: {
    mean: 117.16256215040397,
    median: 102.0,
    min: 7,
    max: 1432,
    percentiles: [7, 41.0, 59.0, 74.0, 88.0, 102.0, 117.0, 133.0, 155.0, 193.0, 1432],
    color: palettes.rdylgn,
  },
  travel_time_health_major: {
    mean: 358.4379661280298,
    median: 333.0,
    min: 11,
    max: 1800,
    percentiles: [11, 138.0, 199.0, 247.0, 292.0, 333.0, 376.7999999999993, 425.0, 489.0, 594.0, 1800],
    color: palettes.rdylgn,
  },
  travel_time_markets: {
    mean: 335.20478558110625,
    median: 300.0,
    min: 7,
    max: 1806,
    percentiles: [7, 106.0, 158.0, 205.0, 252.0, 300.0, 351.0, 412.0, 487.0, 602.0, 1806],
    color: palettes.rdylgn,
  },
  rwi: {
    mean: 0.0008582193909260408,
    median: -0.036,
    min: -0.638,
    max: 1.75,
    percentiles: [-0.638, -0.206, -0.151, -0.109, -0.072, -0.036, 0.004, 0.051, 0.113, 0.229, 1.75],
    color: palettes.rdylgn,
  },
  underweight: {
    mean: 0.08588109850839029,
    median: 0.085,
    min: 0.047,
    max: 0.22,
    percentiles: [0.047, 0.073, 0.077, 0.08, 0.083, 0.085, 0.088, 0.09, 0.093, 0.098, 0.22],
    color: palettes.rdylgn,
  },
  pregnancies: {
    mean: 25.60102893878185,
    median: 22.3825,
    min: 0.028,
    max: 1456.267,
    percentiles: [0.028, 7.3133, 12.3836, 16.325, 19.513400000000004, 22.3825, 25.3188, 28.649, 33.0538, 41.0997, 1456.267],
    color: palettes.magma,
  },
  births: {
    mean: 18.07818975295214,
    median: 15.805499999999999,
    min: 0.02,
    max: 1028.345,
    percentiles: [0.02, 5.1643, 8.7446, 11.528, 13.7802, 15.805499999999999, 17.879, 20.231, 23.3408, 29.0227, 1028.345],
    color: palettes.magma,
  },
  female_educational_attainment_mean: {
    mean: 4.768765032628962,
    median: 4.681,
    min: 3.364,
    max: 8.572,
    percentiles: [3.364, 4.254, 4.398, 4.501, 4.592, 4.681, 4.773, 4.889, 5.038, 5.299, 8.572],
    color: palettes.rdylgn,
  },
  male_educational_attainment_mean: {
    mean: 5.0279121348663764,
    median: 4.936,
    min: 4.028,
    max: 8.908,
    percentiles: [4.028, 4.659, 4.756, 4.823, 4.877, 4.936, 5.005, 5.088, 5.196, 5.403, 8.908],
    color: palettes.rdylgn,
  },
};

export const mapStyles = {
  population: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "population"], 0, palettes.magma[4], 20055 * 0.25, palettes.magma[3], 20055 * 0.5, palettes.magma[2], 20055 * 0.75, palettes.magma[1], 20055, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  kids_0_9: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "kids_0_9"], 0, palettes.magma[4], 4887 * 0.25, palettes.magma[3], 4887 * 0.5, palettes.magma[2], 4887 * 0.75, palettes.magma[1], 4887, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  kids_5_9: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "kids_5_9"], 0, palettes.magma[4], 2411 * 0.25, palettes.magma[3], 2411 * 0.5, palettes.magma[2], 2411 * 0.75, palettes.magma[1], 2411, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  kids_10_14: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "kids_10_14"], 0, palettes.magma[4], 1935 * 0.25, palettes.magma[3], 1935 * 0.5, palettes.magma[2], 1935 * 0.75, palettes.magma[1], 1935, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  males_15_49: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "males_15_49"], 0, palettes.magma[4], 7390 * 0.25, palettes.magma[3], 7390 * 0.5, palettes.magma[2], 7390 * 0.75, palettes.magma[1], 7390, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  females_15_49: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "females_15_49"], 0, palettes.magma[4], 5224 * 0.25, palettes.magma[3], 5224 * 0.5, palettes.magma[2], 5224 * 0.75, palettes.magma[1], 5224, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  people_65_plus: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "people_65_plus"], 0, palettes.magma[4], 275 * 0.25, palettes.magma[3], 275 * 0.5, palettes.magma[2], 275 * 0.75, palettes.magma[1], 275, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  time_delta_all_removed_fixed_education_all: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_fixed_education_all"], 0, "rgba(255, 255, 255, 0)", 1, palettes.magma[4], 15, palettes.magma[3], 30, palettes.magma[2], 60, palettes.magma[1], 90, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  time_delta_all_removed_fixed_education_primary: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_fixed_education_primary"], 0, "rgba(255, 255, 255, 0)", 1, palettes.magma[4], 15, palettes.magma[3], 30, palettes.magma[2], 60, palettes.magma[1], 90, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  time_delta_all_removed_fixed_education_secondary: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_fixed_education_secondary"], 0, "rgba(255, 255, 255, 0)", 1, palettes.magma[4], 15, palettes.magma[3], 30, palettes.magma[2], 60, palettes.magma[1], 90, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  time_delta_all_removed_fixed_markets: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_fixed_markets"], 0, "rgba(255, 255, 255, 0)", 1, palettes.magma[4], 15, palettes.magma[3], 30, palettes.magma[2], 60, palettes.magma[1], 90, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  time_delta_all_removed_optimal_health_all: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_optimal_health_all"], 0, "rgba(255, 255, 255, 0)", 1, palettes.magma[4], 15, palettes.magma[3], 30, palettes.magma[2], 60, palettes.magma[1], 90, palettes.magma[0]],
    },
  },
  time_delta_all_removed_optimal_health_centers: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_optimal_health_centers"], 0, "rgba(255, 255, 255, 0)", 1, palettes.magma[4], 15, palettes.magma[3], 30, palettes.magma[2], 60, palettes.magma[1], 90, palettes.magma[0]],
    },
  },
  time_delta_all_removed_optimal_health_major: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_optimal_health_major"], 0, "rgba(255, 255, 255, 0)", 1, palettes.magma[4], 15, palettes.magma[3], 30, palettes.magma[2], 60, palettes.magma[1], 90, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  time_delta_all_removed_optimal_markets: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_optimal_markets"], 0, "rgba(255, 255, 255, 0)", 1, palettes.magma[4], 15, palettes.magma[3], 30, palettes.magma[2], 60, palettes.magma[1], 90, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_all_removed_fixed_education_all: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_fixed_education_all"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_all_removed_fixed_education_primary: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_fixed_education_primary"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_all_removed_fixed_education_secondary: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_fixed_education_secondary"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_all_removed_fixed_markets: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_fixed_markets"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_all_removed_optimal_health_all: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_optimal_health_all"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_all_removed_optimal_health_centers: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_optimal_health_centers"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_all_removed_optimal_health_major: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_optimal_health_major"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_all_removed_optimal_markets: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_optimal_markets"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_education_all: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_education_all"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_education_primary: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_education_primary"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_education_secondary: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_education_secondary"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },

  travel_time_health_all: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_health_all"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_health_centers: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_health_centers"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_health_major: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_health_major"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  travel_time_markets: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_markets"], 0, palettes.rdylgn[4], 15, palettes.rdylgn[3], 30, palettes.rdylgn[2], 60, palettes.rdylgn[1], 90, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  rwi: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "rwi"], -0.638, palettes.rdylgn[0], -0.638 * 0.5, palettes.rdylgn[1], 0, palettes.rdylgn[2], 1.75 * 0.5, palettes.rdylgn[3], 1.75, palettes.rdylgn[4]],
      "fill-opacity": 0.5,
    },
  },
  // from this study https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6390397/
  underweight: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "underweight"], 0, palettes.rdylgn[4], 0.025, palettes.rdylgn[3], 0.05, palettes.rdylgn[2], 0.1, palettes.rdylgn[1], 0.15, palettes.rdylgn[0]],
      "fill-opacity": 0.5,
    },
  },
  pregnancies: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "pregnancies"], 0.028, palettes.magma[4], 1456.267 * 0.25, palettes.magma[3], 1456.267 * 0.5, palettes.magma[2], 1456.267 * 0.75, palettes.magma[1], 1456.267, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  births: {
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "births"], 0.02, palettes.magma[4], 1028.345 * 0.25, palettes.magma[3], 1028.345 * 0.5, palettes.magma[2], 1028.345 * 0.75, palettes.magma[1], 1028.345, palettes.magma[0]],
      "fill-opacity": 0.5,
    },
  },
  female_educational_attainment_mean: {
    style: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "female_educational_attainment_mean"],
        3.364,
        palettes.rdylgn[0],
        (8.572 - 3.364) * 0.25 + 3.364,
        palettes.rdylgn[1],
        (8.572 - 3.364) * 0.5 + 3.364,
        palettes.rdylgn[2],
        (8.572 - 3.364) * 0.75 + 3.364,
        palettes.rdylgn[3],
        8.572,
        palettes.rdylgn[4],
      ],
      "fill-opacity": 0.5,
    },
  },
  male_educational_attainment_mean: {
    style: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "male_educational_attainment_mean"],
        4.028,
        palettes.rdylgn[0],
        (8.908 - 4.028) * 0.25 + 4.028,
        palettes.rdylgn[1],
        (8.908 - 4.028) * 0.5 + 4.028,
        palettes.rdylgn[2],
        (8.908 - 4.028) * 0.75 + 4.028,
        palettes.rdylgn[3],
        8.908,
        palettes.rdylgn[4],
      ],
      "fill-opacity": 0.5,
    },
  },
};

export let transSlider = document.getElementById("trans-slider");
// add event listener to slider and update layer transparency when updated
transSlider.addEventListener("change", function () {
  console.log(transSlider.value);
  map.setPaintProperty("hex-8-layer", "fill-opacity", Number(transSlider.value) / 100);
});

export function initializeMap(map) {
  // add /data/rwa_travel_time_hex-8-rounded.geojson
  // make layer rwa-feb032023-8sgj6n not visible
  // map.setLayoutProperty("rwa-feb032023-8sgj6n", "visibility", "none");

  map.addSource("hex-8-source", {
    type: "geojson",
    data: "./rwa_travel_time_hex-8.geojson",
    generateId: true,
  });
  map.addLayer(
    {
      id: "hex-8-layer",
      type: "fill",
      source: "hex-8-source",
      paint: {
        "fill-color": mapStyles.male_educational_attainment_mean.style["fill-color"],
        "fill-opacity": 0.5,
        "fill-outline-color": "rgba(255, 255, 255, .1)",
      },
    },
    "admin-0-boundary-disputed"
  );
  map.addLayer({
    id: "hex-8-hover",
    type: "line",
    source: "hex-8-source",
    paint: {
      "line-color": "#66BEC7",
      "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 15, 2],
      "line-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 0.75, 0],
    },
  });
  map.addLayer(
    {
      id: "hex-8-click",
      type: "fill",
      source: "hex-8-source",
      paint: {
        "fill-color": "#66BEC7",
        "fill-opacity": ["case", ["boolean", ["feature-state", "click"], false], 0.8, 0],
      },
    },
    "admin-0-boundary-disputed"
  );
}



function StyleKey(value) {
  return Object.keys(menuOptions).find((key) => menuOptions[key] === value);
}

function getKeyByValue(value) {
  for (let key in menuOptions) {
    if (menuOptions.hasOwnProperty(key) && menuOptions[key] === value) {
      return key;
    }
  }
  return null; // Value not found in the object
}

export function updateHexStyling(currentMenuState) {
  console.log(currentMenuState);
  let styleKey = Object.keys(menuOptions).find((key) => JSON.stringify(menuOptions[key]) === JSON.stringify([currentMenuState.dropdown1, currentMenuState.dropdown2, currentMenuState.dropdown3]));
  console.log(styleKey);
  map.setPaintProperty("hex-8-layer", "fill-color", mapStyles[styleKey]["style"]["fill-color"]);
}
