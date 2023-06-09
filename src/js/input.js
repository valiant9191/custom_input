import fetchSubmit from './fetch.js';

const Input = {
  elements: {
    form: null,
  },
  init() {
    // create form
    this.elements.form = document.createElement('form');
    this.elements.form.id = ('form');
    this.elements.form.classList.add('form');
    this.elements.form.setAttribute('novalidate', true);

    this.elements.form.appendChild(this.createInputs());

    // create submit button
    const submitButton = document.createElement('button');
    submitButton.classList = 'form__group-submit';
    submitButton.setAttribute('type', 'button');
    submitButton.innerHTML = 'Submit';

    this.elements.form.appendChild(submitButton);

    // <== fetch ==>
    submitButton.addEventListener('click', fetchSubmit);

    // add to document
    document.body.appendChild(this.elements.form);
  },
  createInputs() {
    const inputs = [
      {
        type: 'text',
        name: 'name',
        minlength: '2',
        maxLength: '25',
        required: true,
      },
      {
        type: 'text',
        name: 'surname',
        minlength: '2',
        maxLength: '25',
        required: true,
      },
      {
        type: 'email',
        name: 'email',
        required: true,
      },
      {
        type: 'date',
        name: 'date of birth',
        required: true,
      },
      {
        type: 'password',
        name: 'password',
        required: true,
      },
      {
        type: 'password',
        name: 'confirm password',
        required: true,
      },
    ];

    const fragment = document.createDocumentFragment();

    inputs.forEach((input) => {
      const inputContainer = document.createElement('div');
      inputContainer.classList = 'form__group';

      // create input
      const inputElement = document.createElement('input');
      inputElement.classList = 'form__group-field';
      inputElement.id = input.name.replaceAll(' ', '_');

      // for each inputs key create a attribute
      const keys = Object.entries(input);
      for (const [key, value] of keys) {
        if (value === 'date') {
          const date = new Date().toLocaleDateString();
          inputElement.setAttribute('max', date);
        }
        inputElement.setAttribute(key, input[key].toString().replaceAll(' ', '_'));
      }

      // create label for input
      const labelElement = document.createElement('label');
      labelElement.classList = 'form__group-label';
      labelElement.setAttribute('for', input.name.replaceAll(' ', '_'));
      labelElement.innerHTML = input.name;

      inputContainer.appendChild(inputElement);
      inputContainer.appendChild(labelElement);

      fragment.appendChild(inputContainer);
    });

    return fragment;
  },
};

export default Input;
