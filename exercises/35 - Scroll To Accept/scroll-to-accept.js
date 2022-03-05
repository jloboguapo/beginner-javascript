const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');
const ob = new IntersectionObserver(obCallBack, {
  root: terms,
  threshold: 1,
});

function obCallBack(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
}

ob.observe(terms.lastElementChild);
