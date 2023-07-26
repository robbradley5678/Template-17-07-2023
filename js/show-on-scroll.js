/* Fades in elements with "hidden-until-scroll" when in viewport */

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show-on-scroll');
		}
	})
});

const hiddenElements = document.querySelectorAll('.hidden-until-scroll');
hiddenElements.forEach((el) => observer.observe(el));