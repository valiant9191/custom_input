import Input from './js/input.js';
import validateDebounce from './js/validateDebounce.js';

window.addEventListener('DOMContentLoaded', () => {
  Input.init();
});

document.addEventListener('input', validateDebounce);
