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
  time_delta_all_removed_fixed_education_all: ["Travel Time", "Change", "To Schools"],
  time_delta_all_removed_fixed_education_primary: ["Travel Time", "Change", "To Primary Schools"],
  time_delta_all_removed_fixed_education_secondary: ["Travel Time", "Change", "To Secondary Schools"],
  time_delta_all_removed_fixed_markets: ["N/A"],
  time_delta_all_removed_optimal_health_all: ["Travel Time", "Change", "To Healthcare"],
  time_delta_all_removed_optimal_health_centers: ["Travel Time", "Change", "To Health Centers"],
  time_delta_all_removed_optimal_health_major: ["Travel Time", "Change", "To Hospitals"],
  time_delta_all_removed_optimal_markets: ["Travel Time", "Change", "To Markets"],
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
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "population"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  kids_0_9: {
    mean: 177.17235083903046,
    median: 148.0,
    min: 0,
    max: 4887,
    percentiles: [0, 46.0, 80.0, 106.0, 127.0, 148.0, 169.0, 194.0, 231.0, 302.0, 4887],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "kids_0_9"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  kids_5_9: {
    mean: 94.67942044748291,
    median: 79.0,
    min: 0,
    max: 2411,
    percentiles: [0, 25.0, 43.0, 57.0, 68.0, 79.0, 91.0, 105.0, 124.0, 162.0, 2411],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "kids_5_9"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  kids_10_14: {
    mean: 89.09870261031696,
    median: 75.0,
    min: 0,
    max: 1935,
    percentiles: [0, 23.0, 40.0, 53.0, 64.0, 75.0, 85.0, 98.0, 117.0, 154.0, 1935],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "kids_10_14"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  males_15_49: {
    mean: 176.66508701056557,
    median: 138.0,
    min: 1,
    max: 7390,
    percentiles: [1, 43.0, 75.0, 99.0, 119.0, 138.0, 158.0, 182.0, 216.0, 288.0, 7390],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "males_15_49"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  females_15_49: {
    mean: 177.8094313238036,
    median: 148.0,
    min: 1,
    max: 5224,
    percentiles: [1, 46.0, 79.0, 106.0, 128.0, 148.0, 169.0, 194.0, 230.0, 298.0, 5224],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "females_15_49"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  people_65_plus: {
    mean: 18.14791796146675,
    median: 16.0,
    min: 0,
    max: 275,
    percentiles: [0, 4.0, 8.0, 11.0, 14.0, 16.0, 18.0, 21.0, 25.0, 32.0, 275],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "people_65_plus"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  time_delta_all_removed_fixed_education_all: {
    mean: 3.0391159105034182,
    median: 0.0,
    min: 0,
    max: 1172,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1172],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_fixed_education_all"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  time_delta_all_removed_fixed_education_primary: {
    mean: 3.495105655686762,
    median: 0.0,
    min: 0,
    max: 1172,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1172],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_fixed_education_all"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  time_delta_all_removed_fixed_education_secondary: {
    mean: 5.436373523927905,
    median: 0.0,
    min: 0,
    max: 1242,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1242],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_fixed_education_secondary"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  time_delta_all_removed_fixed_markets: {
    mean: 14.47739279055314,
    median: 0.0,
    min: 0,
    max: 1249,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 12.0, 31.0, 1249],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_fixed_markets"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  time_delta_all_removed_optimal_health_all: {
    mean: 1.4368784959602237,
    median: 0.0,
    min: 0,
    max: 235,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 235],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_optimal_health_all"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  time_delta_all_removed_optimal_health_centers: {
    mean: 2.4074347420758233,
    median: 0.0,
    min: 0,
    max: 243,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 243],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_optimal_health_centers"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  time_delta_all_removed_optimal_health_major: {
    mean: 9.765343380981976,
    median: 0.0,
    min: 0,
    max: 469,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.0, 26.0, 469],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_optimal_health_major"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  time_delta_all_removed_optimal_markets: {
    mean: 9.51180857675575,
    median: 0.0,
    min: 0,
    max: 445,
    percentiles: [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 12.0, 28.0, 445],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "time_delta_all_removed_optimal_markets"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_all_removed_fixed_education_all: {
    mean: 64.56207271597265,
    median: 47.0,
    min: 0,
    max: 1421,
    percentiles: [0, 18.0, 26.0, 33.0, 40.0, 47.0, 54.0, 64.0, 78.0, 109.0, 1421],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_fixed_education_all"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_all_removed_fixed_education_primary: {
    mean: 69.13680857675575,
    median: 50.0,
    min: 0,
    max: 1421,
    percentiles: [0, 20.0, 29.0, 36.0, 43.0, 50.0, 59.0, 69.0, 85.0, 119.0, 1421],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_fixed_education_primary"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_all_removed_fixed_education_secondary: {
    mean: 96.96678837787445,
    median: 75.0,
    min: 5,
    max: 1467,
    percentiles: [5, 27.0, 40.0, 52.0, 63.0, 75.0, 87.0, 103.0, 126.0, 169.0, 1467],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_fixed_education_secondary"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_all_removed_fixed_markets: {
    mean: 349.8364667495339,
    median: 309.5,
    min: 7,
    max: 1806,
    percentiles: [7, 109.0, 162.0, 211.0, 259.0, 309.5, 364.0, 426.0, 506.0, 635.0, 1806],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_fixed_markets"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_all_removed_optimal_health_all: {
    mean: 85.76064325668116,
    median: 73.0,
    min: 0,
    max: 1468,
    percentiles: [0, 29.0, 42.0, 53.0, 63.0, 73.0, 84.0, 97.0, 113.0, 141.0, 1468],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_optimal_health_all"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_all_removed_optimal_health_centers: {
    mean: 119.61839651957737,
    median: 104.0,
    min: 7,
    max: 1432,
    percentiles: [7, 42.0, 60.0, 76.0, 90.0, 104.0, 119.0, 136.0, 159.0, 198.0, 1432],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_optimal_health_centers"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_all_removed_optimal_health_major: {
    mean: 368.2246348663766,
    median: 344.5,
    min: 11,
    max: 1800,
    percentiles: [11, 142.0, 204.0, 254.0, 300.0, 344.5, 389.0, 438.0, 504.0, 611.0, 1800],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_optimal_health_major"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_all_removed_optimal_markets: {
    mean: 344.69771597265384,
    median: 308.0,
    min: 7,
    max: 1806,
    percentiles: [7, 109.0, 162.0, 211.0, 259.0, 308.0, 362.0, 423.0, 500.0, 622.0, 1806],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_all_removed_optimal_markets"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_education_all: {
    mean: 61.47743163455562,
    median: 46.0,
    min: 0,
    max: 1421,
    percentiles: [0, 18.0, 26.0, 33.0, 39.0, 46.0, 53.0, 62.0, 75.0, 101.0, 1421],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_education_all"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_education_primary: {
    mean: 65.5924875699192,
    median: 49.0,
    min: 0,
    max: 1421,
    percentiles: [0, 20.0, 28.0, 36.0, 42.0, 49.0, 57.0, 67.0, 81.0, 110.0, 1421],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_education_primary"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_education_secondary: {
    mean: 91.46616687383468,
    median: 73.0,
    min: 5,
    max: 1467,
    percentiles: [5, 27.0, 40.0, 51.0, 62.0, 73.0, 85.0, 99.0, 119.0, 156.0, 1467],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_education_secondary"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_health_all: {
    mean: 84.27423865755128,
    median: 72.0,
    min: 0,
    max: 1468,
    percentiles: [0, 29.0, 42.0, 52.0, 62.0, 72.0, 83.0, 95.0, 111.0, 137.0, 1468],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_health_all"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_health_centers: {
    mean: 117.16256215040397,
    median: 102.0,
    min: 7,
    max: 1432,
    percentiles: [7, 41.0, 59.0, 74.0, 88.0, 102.0, 117.0, 133.0, 155.0, 193.0, 1432],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_health_centers"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_health_major: {
    mean: 358.4379661280298,
    median: 333.0,
    min: 11,
    max: 1800,
    percentiles: [11, 138.0, 199.0, 247.0, 292.0, 333.0, 376.7999999999993, 425.0, 489.0, 594.0, 1800],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_health_major"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  travel_time_markets: {
    mean: 335.20478558110625,
    median: 300.0,
    min: 7,
    max: 1806,
    percentiles: [7, 106.0, 158.0, 205.0, 252.0, 300.0, 351.0, 412.0, 487.0, 602.0, 1806],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "travel_time_markets"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  rwi: {
    mean: 0.0008582193909260408,
    median: -0.036,
    min: -0.638,
    max: 1.75,
    percentiles: [-0.638, -0.206, -0.151, -0.109, -0.072, -0.036, 0.004, 0.051, 0.113, 0.229, 1.75],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "rwi"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  underweight: {
    mean: 0.08588109850839029,
    median: 0.085,
    min: 0.047,
    max: 0.22,
    percentiles: [0.047, 0.073, 0.077, 0.08, 0.083, 0.085, 0.088, 0.09, 0.093, 0.098, 0.22],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "underweight"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  pregnancies: {
    mean: 25.60102893878185,
    median: 22.3825,
    min: 0.028,
    max: 1456.267,
    percentiles: [0.028, 7.3133, 12.3836, 16.325, 19.513400000000004, 22.3825, 25.3188, 28.649, 33.0538, 41.0997, 1456.267],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "pregnancies"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  births: {
    mean: 18.07818975295214,
    median: 15.805499999999999,
    min: 0.02,
    max: 1028.345,
    percentiles: [0.02, 5.1643, 8.7446, 11.528, 13.7802, 15.805499999999999, 17.879, 20.231, 23.3408, 29.0227, 1028.345],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "births"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  female_educational_attainment_mean: {
    mean: 4.768765032628962,
    median: 4.681,
    min: 3.364,
    max: 8.572,
    percentiles: [3.364, 4.254, 4.398, 4.501, 4.592, 4.681, 4.773, 4.889, 5.038, 5.299, 8.572],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", interestVar], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
  male_educational_attainment_mean: {
    mean: 5.0279121348663764,
    median: 4.936,
    min: 4.028,
    max: 8.908,
    percentiles: [4.028, 4.659, 4.756, 4.823, 4.877, 4.936, 5.005, 5.088, 5.196, 5.403, 8.908],
    style: {
      "fill-color": ["interpolate", ["linear"], ["get", "male_educational_attainment_mean"], this.min, "#f50000", this.min+(this.max-this.min)/2, "#fff700", this.max, "#12822e"],
      "fill-opacity": 0.5,
    },
    
  },
};
