// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// import bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
import { testingscratch } from './map.js';



/* global bootstrap: false */

  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });


// when data-bs-toggle is clicked change class to active
const toggle = document.querySelectorAll('[data-bs-toggle="tooltip"]');
toggle.forEach((el) => {
  el.addEventListener("click", () => {
    // if any other element has class active remove it
    const active = document.querySelector(".active");
    if (active) {
        active.classList.remove("active");
    }
    el.classList.toggle("active");

  });
});

// console.log(tooltipTriggerList)
// console.log(toggle)

// Import our custom JS

