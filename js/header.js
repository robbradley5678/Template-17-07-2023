let root = document.querySelector(':root');
let header = document.querySelector('header');
let heroHeight = window.innerHeight * 0.3;


function loadContent () {
    fetch('./header.html')
    .then(res => {
        return res.text();
    })
    .then(html => {
        header.innerHTML = html;
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

        /* Expand/collapse mobile services dropdown */
        dropdown.addEventListener("click", function() {
            if (content.style.maxHeight) {
            content.style.maxHeight = null;
            dropdownArrow.style.transform = "scale(1)";
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            dropdownArrow.style.transform = "scale(-1)";
            }
         });
    })
};

loadContent();

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    root.style.setProperty('--header-height', '65px'); 
  } else {
    root.style.setProperty('--header-height', '75px'); 
  }

  if (document.body.scrollTop > heroHeight || document.documentElement.scrollTop > heroHeight) {
    header.style.boxShadow = "0px 1px 5px rgba(0,0,0,0.5)";
  } else {
    header.style.boxShadow = "none";
  }
};

window.onscroll = function() {scrollFunction()};



