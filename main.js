const slider = document.querySelector(".slider__list");
const sliderImgs = Array.from(slider.querySelectorAll(".slider__img"));
const slideCount = sliderImgs.length;
const prevButton = document.querySelector(".slider__btn--prev");
const nextButton = document.querySelector(".slider__btn--next");
let slideIndex = 0;

const showPreviousSlide = () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  sliderInit();
}

const showNextSlide = () => {
  slideIndex = (slideIndex + 1) % slideCount;
  sliderInit();
}

const sliderInit = () => {
  sliderImgs.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

sliderInit();