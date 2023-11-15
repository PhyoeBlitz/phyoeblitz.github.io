//GET HTML ELEMENTS FROM THE INDEX.HTML DOCUMENT
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// SET THE STATE OF THE MENU
let showMenu = false;

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("close");
    menu.classList.add("show");
    showMenu = true;
  } else {
    hamburger.classList.remove("close");
    menu.classList.remove("show");
    showMenu = false;
  }
}

// Calculate years of experience
function calculateExperience(startDate) {
    const today = new Date();
    const start = new Date(startDate);
    const years = today.getFullYear() - start.getFullYear();
    const months = today.getMonth() - start.getMonth();
    const days = today.getDate() - start.getDate();

    let experience = years;
    if (months < 0 || (months === 0 && days < 0)) {
        experience--;
    }

    return experience;
}

// Usage
const startDate = window.startDate; // Replace with your start date in YYYY-MM-DD format
const experienceYears = calculateExperience(new Date(startDate));
const experienceElement = document.getElementById('experienceYears');
if(experienceElement){
  experienceElement.textContent = experienceYears + ' years';
}

//Skills
// Get the div element
var div = document.getElementById("Skills");

// Create new elements
var h6_1 = document.createElement("h6");
var p_1 = document.createElement("p");
var h6_2 = document.createElement("h6");
var p_2 = document.createElement("p");

// Create text nodes
var h6_1_content = document.createTextNode("English Speaking & Writing");
var p_1_content = document.createTextNode("I've been studying English since elementary school.");
var h6_2_content = document.createTextNode("Japanese Speaking & Writing");
var p_2_content = document.createTextNode("I passed the Japanese Language Proficiency Test N3 in March of 2017");

// Add the text nodes to the newly created elements
h6_1.appendChild(h6_1_content);
p_1.appendChild(p_1_content);
h6_2.appendChild(h6_2_content);
p_2.appendChild(p_2_content);

// Add the newly created elements and their content into the div
div.appendChild(h6_1);
div.appendChild(p_1);
div.appendChild(h6_2);
div.appendChild(p_2);
