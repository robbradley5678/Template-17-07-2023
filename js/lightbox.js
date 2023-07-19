/* Code from https://www.freecodecamp.org/news/how-to-create-a-lightbox-using-html-css-and-javascript/ */

var slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById('lightbox').style.display = 'flex';
  document.documentElement.style.overflow = 'hidden'; // Disable scroll
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.documentElement.style.overflow = 'auto'; // Enable scroll
}

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function toSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {

  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  }
  
  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
      modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  }
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
}