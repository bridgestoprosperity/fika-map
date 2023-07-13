
export let menuOptions = {
  dropdown1: ["Demographics", "Population", "Impact", "Travel Time"],
  dropdown2: {
    Demographics: ["Pregnancies", "Births", "RWI", "Underweight", "Female Education", "Male Education"],
    Population: ["All", "Children 0-9", "Children 5-9", "Children 10-14", "Male 15-49", "Female 15-49", "Adults 65+"],
    Impact: ["Potential Impact", "Current Impact"],
    TravelTime: ["With Bridges", "Without Bridges"],
  },
  dropdown3: {
    Demographics: ["N/A"],
    Population: ["N/A"],
    Impact: ["Schools", "Markets", "Primary Schools", "Secondary Schools", "Health Centers", "Hospitals"],
    TravelTime: ["To Schools", "To Markets", "To Primary Schools", "To Secondary Schools", "To Health Centers", "To Hospitals"],
  },
  dropdown4: ["Auto Geography", "Hex", "Village", "Admin 4", "Admin 3", "Admin 2"],
  dropdown5: ["Standard basemap", "Simple basemap", "Satellite map"],
};

export function updateMenu(choices, menu) {
    while (menu.firstChild) {
      menu.removeChild(menu.firstChild);
    }
    for (let i = 0; i < choices.length; i++) {
      let o = document.createElement("option");
      o.text = choices[i];
      o.value = choices[i];
      menu.appendChild(o);
      if (choices[i] == "N/A") {
        menu.disabled = true;
      } else {
        menu.disabled = false;
      }
    }
  }

//   The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.
//   const obj = {
//     log: ['a', 'b', 'c'],
//     get latest() {
//       return this.log[this.log.length - 1];
//     }
//   };

//   console.log(obj.latest);
//   // Expected output: "c"
