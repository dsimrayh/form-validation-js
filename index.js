const submit = document.querySelector('button[type="submit"');
const inputs = document.querySelectorAll('input');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('yo');
});

inputs.forEach((input) => {
  console.log({ input: input.name, validity: input.validity });
});
