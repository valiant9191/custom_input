import Utils from './utils.js';
import errorMessage from './error.js';

const Check = {
  checkUsername() {
    let valid = false;
    const min = 2;
    const max = 25;
    const username = document.getElementById('name');
    if (!Utils.isEmpty(username.value.trim())) {
      errorMessage(username, 'Username cannot be blank.');
    } else if (!Utils.isBetween(username.length, min, max)) {
      errorMessage(username, `Username must be between ${min} and ${max} characters.`);
    } else {
      valid = true;
    }
    return valid;
  },
  checkSurname() {
    const username = document.getElementById('surname');
    let valid = false;
    const min = 2;
    const max = 25;

    if (!Utils.isEmpty(username.value.trim())) {
      errorMessage(username, 'Surname cannot be blank.');
    } else if (!Utils.isBetween(username.value.trim().length, min, max)) {
      errorMessage(username, `Surname must be between ${min} and ${max} characters.`);
    } else {
      valid = true;
    }
    return valid;
  },

  checkEmail() {
    const emailEl = document.getElementById('email');
    let valid = false;

    const email = emailEl.value.trim();
    if (!Utils.isEmpty(email)) {
      errorMessage(emailEl, 'Email cannot be blank.');
    } else if (!Utils.isEmailValid(email)) {
      errorMessage(emailEl, 'Email is not valid. Example@test.om');
    } else {
      valid = true;
    }
    return valid;
  },
  checkDate() {
    let valid = false;
    const userBirthDateEl = document.getElementById('date_of_birth');
    const birthDate = userBirthDateEl.value.trim();

    if (!Utils.isValidDate(birthDate)) {
      errorMessage(userBirthDateEl, 'You are too young, invalid birthday date.');
    } else if (!Utils.isEmpty(birthDate)) {
      errorMessage(userBirthDateEl, 'birthday date cannot be blank.');
    } else {
      valid = true;
    }
    return valid;
  },

  checkPassword() {
    const passwordEl = document.getElementById('password');
    const password = passwordEl.value.trim();

    let valid = false;

    if (!Utils.isEmpty(password)) {
      errorMessage(passwordEl, 'Password cannot be blank.');
    } else if (!Utils.isPasswordSecure(password)) {
      errorMessage(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
      // showSuccess(passwordEl);
      valid = true;
    }

    return valid;
  },

  checkConfirmPassword() {
    const confirmPasswordEl = document.getElementById('confirm_password');
    // const passwordEl = document.getElementById('password').value.trim();
    let valid = false;

    // check confirm password
    if (!Utils.isEmpty(confirmPasswordEl.value.trim())) {
      errorMessage(confirmPasswordEl, 'Please repeat the password again');
    } else if (!Utils.isPasswordRepeated(confirmPasswordEl.value.trim())) {
      errorMessage(confirmPasswordEl, 'password did not not match');
    } else {
      // showSuccess(confirmPasswordEl);
      valid = true;
    }

    return valid;
  },
  checkValue() {

  },
};

export default Check;
