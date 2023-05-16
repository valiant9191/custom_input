function errorMessage(element, text) {
  const elemToDelete = document.getElementsByClassName('error__container');
  setTimeout(() => {
    for (const el of elemToDelete) {
      el.remove();
    }
  }, 3000);

  const errorContainer = document.createElement('div');
  const errorContent = document.createElement('p');

  errorContainer.className = 'error__container';
  errorContent.className = 'error__content';
  errorContent.innerHTML = text;

  errorContainer.appendChild(errorContent);

  element.parentNode.appendChild(errorContainer);
}

export default errorMessage;
