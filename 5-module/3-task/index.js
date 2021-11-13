function initCarousel() {
  const SLIDER = document.querySelector('.carousel__inner');
  const BUTTON_RIGHT = document.querySelector('.carousel__arrow.carousel__arrow_right');
  const BUTTON_LEFT = document.querySelector('.carousel__arrow.carousel__arrow_left');
  let sliderPosition = 0;
  let slideCount = 1;
  BUTTON_LEFT.style.display = 'none';
  BUTTON_RIGHT.onclick = function () {
    if (slideCount < SLIDER.children.length) {
      sliderPosition -= SLIDER.offsetWidth;
      SLIDER.style.transform = `translateX(${sliderPosition}px)`;
      slideCount++;
      BUTTON_LEFT.style.display = '';
      if (slideCount == SLIDER.children.length) {
        BUTTON_RIGHT.style.display = 'none';
      }
    }
  }
  BUTTON_LEFT.onclick = function () {
    if (slideCount > 1) {
      sliderPosition += SLIDER.offsetWidth;
      SLIDER.style.transform = `translateX(${sliderPosition}px)`;
      slideCount--;
      BUTTON_RIGHT.style.display = '';
      if (slideCount == 1) {
        BUTTON_LEFT.style.display = 'none';
      }
    }
  }
}



