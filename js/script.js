const slider = document.querySelector('.flexslider');
const slides = slider.querySelectorAll('li');
  
// Store the total number of images
const slideCount = slides.length;
let activeSlide = 2;
  
// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
    slides[activeSlide].classList.remove('active');
    activeSlide++;
    if (activeSlide === slideCount) {
        activeSlide = 2;
    }
    slides[activeSlide].classList.add('active');
}, 3000);