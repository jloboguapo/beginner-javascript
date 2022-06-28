function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  this.gallery = gallery;

  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  this.images.forEach(image =>
    image.addEventListener('click', e => this.showImage(e.currentTarget))
  );

  this.images.forEach(image => {
    image.addEventListener('keyup', e => {
      e.key === 'Enter' && this.showImage(e.currentTarget);
    });
  });

  this.modal.addEventListener('click', this.handleClickOutside);
}

Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info('no image to show');
    return;
  }
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').src = el.title;
  this.modal.querySelector('figure p').src = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};

Gallery.prototype.showNextImage = function (e) {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function (e) {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.handleKeyUp = function (e) {
  e.key === 'Escape' && this.closeModal();
  e.key === 'ArrowRight' && this.showNextImage();
  e.key === 'ArrowLeft' && this.showPrevImage();
};

Gallery.prototype.handleClickOutside = function (e) {
  e.target === e.currentTarget && this.closeModal();
};

Gallery.prototype.openModal = function () {
  !this.modal.matches('.open') && this.modal.classList.add('open');

  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  window.removeEventListener('keyup', e => this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
