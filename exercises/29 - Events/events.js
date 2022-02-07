const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('It got clicked');
}

const hooray = () => console.log('Hooray!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// listen on multiple items//
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(e) {
  console.log('you clicked a button');
  const button = e.target;
  console.log(e.currentTarget);
  console.log(button === e.currentTarget);
  e.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (e) => {
    console.log('you clicked the window');
    console.log(e.target);
    console.log(e.type);
    console.log(e.bubbles);
  },
  {
    capture: true,
  }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function (e) {
  console.log(this);
});
