function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  this.slider = slider;

  this.slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  Slider.prototype.startSlider = function () {
    this.current =
      slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev =
      this.current.previousElementSibling || this.slides.lastElementChild;
    this.next =
      this.current.nextElementSibling || this.slides.firstElementChild;
  };

  Slider.prototype.applyClasses = function () {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
  };

  Slider.prototype.move = function (direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    [this.prev, this.current, this.next].forEach(el =>
      el.classList.remove(...classesToRemove)
    );
    direction === 'back'
      ? ([this.prev, this.current, this.next] = [
          this.prev.previousElementSibling || this.slides.lastElementChild,
          this.prev,
          this.current,
        ])
      : ([this.prev, this.current, this.next] = [
          this.current,
          this.next,
          this.next.nextElementSibling || this.slides.firstElementChild,
        ]);

    this.applyClasses();
  };

  this.startSlider();
  this.applyClasses();

  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
