let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow .slide');

function showNextSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds

// Initialize the slideshow
slides[slideIndex].classList.add('active');