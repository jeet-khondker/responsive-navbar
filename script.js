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

// Function 4 : Function of Dropdown Button
dropdownBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const dropdownIndex = event.currentTarget.dataset.dropdown;
      const dropdownElement = document.getElementById(dropdownIndex);
  
      dropdownElement.classList.toggle("active");
      dropdown.forEach((drop) => {
        if (drop.id !== btn.dataset["dropdown"]) {
          drop.classList.remove("active");
        }
      });
      event.stopPropagation();
      btn.setAttribute(
        "aria-expanded",
        btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
      );
    });
});

// Function 5 : Close of dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// Function 6 : Close of dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
});

// Function 7 : Close of dropdown when the "escape" key is pressed
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDropdownMenu();
      setAriaExpandedFalse();
    }
});