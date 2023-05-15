import Check from './checks.js';

function validateForm() {
  // gets form
  const userNameValid = Check.checkUsername()
    && Check.checkSurname()
    && Check.checkEmail()
    && Check.checkDate()
    && Check.checkPassword()
    && Check.checkConfirmPassword();
  return userNameValid;
}

export default validateForm;
