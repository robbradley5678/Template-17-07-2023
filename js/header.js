/* Contains header HTML (desktop and mobile) and scroll effects */

let header = document.querySelector('header');
let root = document.querySelector(':root');
let squareLogo = document.querySelector(".square-logo");
let heroHeight = window.innerHeight * 0.3;


header.innerHTML = `
<a href="index.html"> <!-- Logo -- add class "square-logo" to img if square -->
    <img src="./media/logo/logo.jpg" alt="logo" class="logo">
</a>

<nav class="desktop-nav">
    <ul>
        <li class="nav-item desktop-nav-dropdown">
            <a href="services.html">Services &#9662;</a>
            <ul class="desktop-nav-dropdown-content">
                <li class="dropdown-item"><a href="#">Dropdown service 1</a></li>
                <li class="dropdown-item"><a href="#">Dropdown service 2</a></li>
                <li class="dropdown-item"><a href="#">Dropdown service 3</a></li>
            </ul>
        </li>
        <li class="nav-item"><a href="our-work.html">Our work</a></li>
        <li class="nav-item"><a href="reviews.html">Reviews</a></li>
        <li class="nav-item"><a href="contact.html" id="nav-cta">Contact</a></li>
    </ul>
</nav>

<div id="hamburger">
    <i class="fas fa-bars"></i>
</div>

<nav id="mobile-nav">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li id="mobile-nav-dropdown">
            <a href="#">Services <span id="dropdown-arrow">&#9662;</span></a>
            <ul id="mobile-nav-dropdown-content">
                <li class="mobile-dropdown-item"><a href="#">Dropdown service 1</a></li>
                <li class="mobile-dropdown-item"><a href="#">Dropdown service 2</a></li>
                <li class="mobile-dropdown-item"><a href="#">Dropdown service 3</a></li>
            </ul>
        </li>
        <li><a href="our-work.html">Our work</a></li>
        <li><a href="reviews.html">Reviews</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
`;


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    root.style.setProperty('--header-height', '65px'); 
  } else {
    root.style.setProperty('--header-height', '75px'); 
  }

  if (document.body.scrollTop > heroHeight || document.documentElement.scrollTop > heroHeight) {
    header.style.boxShadow = "0px 2px 10px grey";
  } else {
    header.style.boxShadow = "none";
  }
};

window.onscroll = function() {scrollFunction()};

/*  Try and use this once site is on server

function loadContent () {
    fetch('./header.html')
    .then(res => {
        return res.text();
    })
    .then(html => {
        header.innerHTML = html;
    })
};

loadContent();

*/