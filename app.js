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