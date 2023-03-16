const submit = document.querySelector('button[type="submit"');
const inputs = document.querySelectorAll('input');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('form submit');
});

inputs.forEach((input) => {
  console.log({ input: input.name, validity: input.validity });
});

// Individual listeners
const email = document.querySelector('#email');
email.addEventListener('input', () => {
  console.log('email updated');
});

const country = document.querySelector('#country');
country.addEventListener('input', () => {
  console.log('country updated');
});

const ZIP = document.querySelector('#ZIP');
ZIP.addEventListener('input', () => {
  console.log('ZIP updated');
});

const password = document.querySelector('#password');
password.addEventListener('input', () => {
  console.log('password updated');
});

const confirm = document.querySelector('#confirm');
confirm.addEventListener('input', () => {
  console.log('confirm updated');
});
