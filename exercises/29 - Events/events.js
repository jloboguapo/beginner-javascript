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
function buyItem() {
  console.log('buying item');
}

const buyButtons = document.querySelectorAll('button.buy');

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', buyItem);
});
