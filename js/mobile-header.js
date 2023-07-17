let html = document.getElementsByTagName('html')[0];
let hamburger = document.getElementById('hamburger');
let mobileNav = document.getElementById('mobile-nav');


hamburger.onclick = () => {
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'flex';
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    hamburger.fontSize = '3.2rem';
    hamburger.style.color = 'white';
    hamburger.style.animationName = "rotate";
    // html.style.height = '100%;'; // Disable scroll
    //html.style.overflow = "hidden";
  } else {
    mobileNav.style.display = 'none';
    hamburger.style.color = 'var(--accent-color-1)';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.style.animationName = "rotate-reverse";
    hamburger.style.animationDirection = "alternate";
   // html.style.overflow = "visible"; // Enable scroll
  }  
}

