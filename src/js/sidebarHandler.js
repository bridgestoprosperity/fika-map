import * as index from "/main.js";
let sidebarLinks = {"info-button":"https://www.bridgestoprosperity.org/", "feedback-button": "https://forms.gle/3H1hcotYYeoheCeYA", "bridge-need-button": "https://forms.gle/xnuknH9SSWA5ybHg7", "bug-button": "https://forms.gle/3H1hcotYYeoheCeYA"}

export default function sidebarHandler(buttonName) {
    if (buttonName == "info-button") {
        console.log("info button clicked");
        // open a modal that explains the map
        var modal = document.getElementById('info-modal');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }
    if (buttonName == "feedback-button") {
        console.log("feedback button clicked");
        // open info button link in new tab
        window.open(sidebarLinks[buttonName], "_blank");
    }
    if (buttonName == "bridge-need-button") {
        console.log("bridge need button clicked");
        window.open(sidebarLinks[buttonName], "_blank");

    }
    if (buttonName == "bug-button") {
        console.log("bug button clicked");
        window.open(sidebarLinks[buttonName], "_blank");
    }
}