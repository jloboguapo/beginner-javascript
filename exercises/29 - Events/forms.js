const wes = document.querySelector('.wes');

wes.addEventListener('click', (e) => {
  console.log('you clicked it');
  const shouldChangePage = confirm(
    'this website may be malicious.  Do you want to proceed?'
  );

  if (!shouldChangePage) {
    e.preventDefault();
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', (e) => {
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry, bro');
  }
  e.preventDefault();
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
