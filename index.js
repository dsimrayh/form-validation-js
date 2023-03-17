const submit = document.querySelector('button[type="submit"');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('form submitted');
  document.querySelectorAll('input').forEach((input) => {
    console.log({
      name: input.id,
      valid: input.validity.valid,
    });
  });
});

// Validation functions

function checkEmail(e) {
  const email = e.target;
  email.className = 'value-entered';
  if (email.value === '') email.className = '';

  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (emailRegEx.test(email.value)) {
    email.setCustomValidity('');
  } else {
    email.setCustomValidity('Input must be a valid email address');
  }
}

function checkCountry(e) {
  const country = e.target;
  country.className = 'value-entered';
  if (country.value === '') country.className = '';

  const countries = ['united states', 'canada', 'united kingdom'];

  if (countries.includes(country.value.toLowerCase())) {
    country.setCustomValidity('');
  } else {
    country.setCustomValidity(
      'Country must be United States, Canada, or United Kingdom.'
    );
  }
}

function checkZIP() {
  console.log('ZIP updated');
}

function checkPassword() {
  console.log('password updated');
}

function checkConfirm() {
  console.log('confirm updated');
}

// Individual event listeners
document.querySelector('#email').oninput = checkEmail;
document.querySelector('#country').oninput = checkCountry;
document.querySelector('#ZIP').oninput = checkZIP;
document.querySelector('#password').oninput = checkPassword;
document.querySelector('#confirm').oninput = checkConfirm;
