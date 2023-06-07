window.addEventListener("scroll", function(){
    var header = document.querySelector(".header_content");
    header.classList.toggle("header_content-down", window.scrollY > 0)
}) 

const slider = document.querySelector('.slider_content');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = slider.querySelector('.slider_element').offsetWidth;

let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition += slideWidth;
  if (currentPosition > 0) {
    currentPosition = -(slider.scrollWidth - slider.offsetWidth);
  }
  slider.style.transform = `translateX(${currentPosition}px)`;
});

nextButton.addEventListener('click', () => {
  currentPosition -= slideWidth;
  if (currentPosition < -(slider.scrollWidth - slider.offsetWidth)) {
    currentPosition = 0;
  }
  slider.style.transform = `translateX(${currentPosition}px)`;
});
