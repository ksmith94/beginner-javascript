function Slider(slider) {
  // eslint-disable-next-line no-undef
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // select the elements needed for the slider
  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextbutton = slider.querySelector('.goToNext');

  // when this slideer is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  // event listeners
  prevButton.addEventListener('click', () => this.move('back'));
  nextbutton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function () {
  this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  // first strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  console.log(this);
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === 'back') {
    // make a new array of the new values, and destructure them over and into the prev,
    // current, and next variables
    [this.prev, this.current, this.next] = [
      // get the prev slide, if there is none get the laste slide from the entire slider for
      // wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // get the next slide or if it's at the end loop aroud and get the first slide
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

// eslint-disable-next-line no-undef
const mySlider = new Slider(document.querySelector('.slider'));
// eslint-disable-next-line no-undef
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

// eslint-disable-next-line no-undef
window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
