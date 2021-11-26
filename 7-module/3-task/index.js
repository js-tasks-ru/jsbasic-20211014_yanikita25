export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.segments = steps - 1;
    this.render();
  }
  render() {
    this.elem = document.createElement('div');
    this.elem.className = 'slider';
    this.elem.innerHTML = `
    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 50%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
    </div>
    `;
    this.sliderSteps = this.elem.querySelector('.slider__steps');
    this.sliderValue = this.elem.querySelector('.slider__value');
    this.sliderThumb = this.elem.querySelector('.slider__thumb');
    this.sliderProgress = this.elem.querySelector('.slider__progress');
    for (let i = 0; i < this.steps; i++) {
      this.sliderSteps.insertAdjacentHTML('beforeend', '<span></span>');
    }
    this.sliderSteps.children[this.value].className = 'slider__step-active';
    this.sliderValue.innerHTML = this.value;
    this.sliderThumb.style.left = this.sliderProgress.style.width = `${this.value / this.segments * 100}%`;
    this.elem.addEventListener('click', this.setSliderValue);
  }
  setSliderValue = (event) => {
    this.clickCoords = event.clientX - this.elem.getBoundingClientRect().left;
    this.coordsRelative = this.clickCoords / this.elem.offsetWidth;
    this.newSliderValue = Math.round(this.coordsRelative * this.segments);
    this.sliderValue.innerHTML = this.newSliderValue;
    this.sliderThumb.style.left = this.sliderProgress.style.width = `${this.newSliderValue / this.segments * 100}%`;
    let sliderChange = new CustomEvent('slider-change', {
      detail: this.newSliderValue,
      bubbles: true
    });
    this.elem.dispatchEvent(sliderChange);
  }
}
