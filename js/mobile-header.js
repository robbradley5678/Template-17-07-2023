let hamburger = document.getElementById("hamburger");
let mobileNav = document.getElementById("mobile-nav");
let dropdown = document.getElementById("mobile-nav-dropdown");
let content = document.getElementById("mobile-nav-dropdown-content");
let dropdownArrow = document.getElementById("dropdown-arrow");

/* Show/hide mobile menu */
hamburger.addEventListener("click", function() {
  if (mobileNav.style.transform === "translateX(100vw)") {
    mobileNav.style.transform = "translateX(0)"; // Moves mobileNav on screen
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    hamburger.style.transform = "rotate(180deg)";
    document.documentElement.style.overflow = 'hidden'; // Disable scroll
  } else {
    mobileNav.style.transform = "translateX(100vw)"; // Moves mobileNav off screen
    hamburger.style.transform = "rotate(0deg)";
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    document.documentElement.style.overflow = 'auto'; // Enable scroll
  }
});

/* Expand/collapse dropdown */
dropdown.addEventListener("click", function() {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    dropdownArrow.innerHTML = "&#9662;"
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    dropdownArrow.innerHTML = "&#9652;"
  }
});
