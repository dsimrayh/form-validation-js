// Event listener for submit button
// Performs final validation check and dispalys errors
const submit = document.querySelector('button[type="submit"');

submit.addEventListener('click', (e) => {
  const inputs = document.querySelectorAll('input');
  let allInputsAreValid = true;

  // Loops through each input. If the input is invalid, the form is prevented from submitting
  // The error for that input is made visible, the error message is displayed, and allInputsareValid becomes false
  inputs.forEach((input) => {
    if (input.validity.valid === false) {
      e.preventDefault();
      const error = document.querySelector(`#${input.id} ~ span`);
      error.classList.add('visible');
      error.textContent = `Error: ${input.validationMessage}`;
      allInputsAreValid = false;
    }
  });

  // If allInputsAreValid is still true after looping through each one, the form can be 'submitted'
  // This will also remove the 'value-entered' class from each input and remove the errors
  if (allInputsAreValid) {
    e.preventDefault();
    inputs.forEach((input) => {
      input.value = '';
      input.className = '';
    });
    document.querySelectorAll('.error').forEach((error) => {
      error.classList = 'error';
      error.textContent = 'Error';
    });
  }
});

// Event listener for show password buttons
// Allows user to show / hide their password input
const showPasswordButtons = document.querySelectorAll('.show-password');

showPasswordButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const inputField = document.querySelector(`#${e.target.dataset.field}`);
    if (inputField.type === 'text') inputField.type = 'password';
    else if (inputField.type === 'password') inputField.type = 'text';
  });
});

// ========== VALIDATION FUNCTIONS ==========
// All follow a similar format:
// Once the user types something, the 'value-entered' class is applied to that input.
// This ensures that the :invalid style only applies once there is input.
// This will prevent inputs having :invalid by default due to the 'required' attr.
// If the field is empty after a user input, the 'value-entered' class is removed.

// Input value is checked against the validation parameters, and the validation message
// is set accordingly.

function checkEmail(e) {
  const email = e.target;
  email.className = 'value-entered';
  if (email.value === '') email.className = '';

  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (emailRegEx.test(email.value)) {
    email.setCustomValidity('');
  } else if (email.value === '') {
    email.setCustomValidity('Please fill out this field.');
  } else {
    email.setCustomValidity('Input must be a valid email address');
  }
}

// checkCountry and checkZIP are closely tied, as the ZIP validation depends on a
// valid country input.
// checkZIP is called in checkCountry for this reason:
// If a user enters an invalid country and a valid ZIP, both will be marked invalid.
// If the user updates the country input to be valid, they will have to trigger an
// input event on the ZIP field for it to validate again.
// Calling CheckZIP in checkCountry does this automatically.

function checkCountry(e) {
  const country = e.target;
  country.className = 'value-entered';
  if (country.value === '') country.className = '';

  const countries = ['united states', 'canada', 'united kingdom'];

  if (countries.includes(country.value.toLowerCase())) {
    country.setCustomValidity('');
    checkZIP({ target: document.querySelector('#ZIP') });
  } else if (country.value === '') {
    country.setCustomValidity('Please fill out this field.');
  } else {
    country.setCustomValidity(
      'Country must be United States, Canada, or United Kingdom.'
    );
    checkZIP({ target: document.querySelector('#ZIP') });
  }
}

function checkZIP(e) {
  const country = document.querySelector('#country').value.toLowerCase();
  const isCountryValid = document.querySelector('#country').validity.valid;
  const ZIP = e.target;
  ZIP.className = 'value-entered';
  if (ZIP.value === '') ZIP.className = '';

  if (country === '' || isCountryValid === false) {
    ZIP.setCustomValidity('Please enter a valid country');
    return;
  }

  const ZIPformatList = {
    'united states': {
      ZIPformat: '^[0-9]{5}(?:-[0-9]{4})?$',
      errorMessage: 'Please enter a valid US ZIP code',
    },
    'canada': {
      ZIPformat: '^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$',
      errorMessage: 'Please enter a valid Canada postal code',
    },
    'united kingdom': {
      ZIPformat: '^[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][ABD-HJLNP-UW-Z]{2}$',
      errorMessage: 'Please enter a valid UK postal code',
    },
  };

  const ZIPregEx = new RegExp(ZIPformatList[country].ZIPformat);

  if (ZIPregEx.test(ZIP.value)) {
    ZIP.setCustomValidity('');
  } else if (ZIP.value === '') {
    ZIP.setCustomValidity('Please fill out this field.');
  } else {
    ZIP.setCustomValidity(ZIPformatList[country].errorMessage);
  }
}

function checkPassword(e) {
  const password = e.target;
  password.className = 'value-entered';
  if (password.value === '') password.className = '';

  const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (passwordRegEx.test(password.value)) {
    password.setCustomValidity('');
    checkConfirm({ target: document.querySelector('#confirm') });
  } else if (password.value === '') {
    password.setCustomValidity('Please fill out this field.');
  } else {
    password.setCustomValidity(
      'Password must be at least 8 characters and must include 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.'
    );
    checkConfirm({ target: document.querySelector('#confirm') });
  }
}

function checkConfirm(e) {
  const password = document.querySelector('#password');
  const check = e.target;
  check.className = 'value-entered';
  if (check.value === '') check.className = '';

  if (check.value === password.value) {
    check.setCustomValidity('');
  } else if (check.value === '') {
    check.setCustomValidity('Please fill out this field.');
  } else {
    check.setCustomValidity('Passwords do not match.');
  }
}

// Individual event listeners for each input field
document.querySelector('#email').oninput = checkEmail;
document.querySelector('#country').oninput = checkCountry;
document.querySelector('#ZIP').oninput = checkZIP;
document.querySelector('#password').oninput = checkPassword;
document.querySelector('#confirm').oninput = checkConfirm;
