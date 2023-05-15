const Utils = {
  passwordCache: null,
  isEmpty(value) {
    return value?.length > 0;
  },
  isBetween(length, min, max) {
    return !(length < min || length > max);
  },

  isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  isValidDate(date) {
    return !(new Date(date).getTime() > new Date().getTime());
  },

  isPasswordSecure(password) {
    const re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])(?=.{8,})');
    this.passwordCache = password;
    return re.test(password);
  },
  isPasswordRepeated(password) {
    return this.passwordCache === password;
  },
};

export default Utils;
