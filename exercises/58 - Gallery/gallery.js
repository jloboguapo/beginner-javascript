function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').src = el.title;
    modal.querySelector('figure p').src = el.dataset.description;
    currentImage = el;
    openModal();
  }

  function showNextImage(e) {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage(e) {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function handleKeyUp(e) {
    e.key === 'Escape' && closeModal();
    e.key === 'ArrowRight' && showNextImage();
    e.key === 'ArrowLeft' && showPrevImage();
  }

  function handleClickOutside(e) {
    e.target === e.currentTarget && closeModal();
  }

  function openModal() {
    !modal.matches('.open') && modal.classList.add('open');

    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget))
  );

  images.forEach(image => {
    image.addEventListener('keyup', e => {
      e.key === 'Enter' && showImage(e.currentTarget);
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
