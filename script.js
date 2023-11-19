const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

// Function 1 : Setting 'aria-expanded" Attribute to False
function setAriaExpandedFalse() {
    dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

// Function 2 : Close of Dropdown Menu
function closeDropdownMenu() {
    dropdown.forEach((drop) => {
        drop.classList.remove("active");
        drop.addEventListener("click", (event) => event.stopPropagation());
    });
}

// Function 3 : Toggle of Hamburger Icon
function toggleHamburger() {
    navMenu.classList.toggle("show");
}