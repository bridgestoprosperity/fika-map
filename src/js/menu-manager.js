import { map } from "../../main.js";

export let menuOptions = {
  dropdown1: ["Demographics", "Population", "Impact", "Travel Time"],
  dropdown2: {
    Demographics: ["Pregnancies", "Births", "Relative Wealth Index", "Underweight", "Female Education", "Male Education"],
    Population: ["All", "Children 0-4", "Children 5-9", "Children 0-9", "Youth 10-14", "People 15-49", "People 50-64", "People 65+", "Female 0-4", "Female 5-9", "Female 0-9", "Female 10-14", "Female 15-49", "Female 50-64", "Female 65+", "Male 0-4", "Male 5-9", "Male 0-9", "Male 10-14", "Male 15-49", "Male 50-64", "Male 65+"],
    Impact: ["Potential Impact", "Current Impact"],
    TravelTime: ["Without Bridges", "With Constructed Bridges", "With All Bridges"],
  },
  dropdown3: {
    Demographics: ["N/A"],
    Population: ["N/A"],
    Impact: ["All", "School", "Healthcare", "Market", "Primary School", "Secondary School", "Health Post", "Health Center", "Major Hospital"],
    TravelTime: ["To School", "To Healthcare", "To Market","To Primary School", "To Secondary School", "To Health Post", "To Health Center", "To Hospital"],
  },
  dropdown4: ["Standard map", "Satellite"],
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
export function updateBaselayer(selection) {
  console.log(selection);
  if (selection == "Standard basemap") {
    map.setLayoutProperty("satellite-base", 'visibility', 'none');
  }
  else {
    map.setLayoutProperty("satellite-base", 'visibility', 'visible');
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
