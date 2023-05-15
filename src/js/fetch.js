import validateForm from './validate.js';

function fetchSubmit() {
  const form = document.getElementById('form');
  const data = Object.fromEntries(new FormData(form));
  const url = 'https://jsonplaceholder.typicode.com/posts';

  // check validation
  const valid = validateForm(data, form);
  if (!valid) {
    return;
  }

  fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
  }).then((responce) => responce.json())
    .then((res) => console.log(res));
}

export default fetchSubmit;
