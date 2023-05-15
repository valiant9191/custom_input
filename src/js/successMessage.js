function successMessage() {
    function removeForm() {
        const formGroup = document.getElementsByClassName('form__group');
        const formGroupSubmit = document.getElementsByClassName('form__group-submit');
        Object.entries(formGroup).forEach(el => el[1].remove());
        formGroupSubmit[0].remove()
    }

    function showSuccess() {
        const form = document.getElementsByClassName('form');
        const successDiv = document.createElement('div')
        successDiv.className = 'form__success';
        successDiv.innerHTML = '<p>You have succesfully registered</p>'
        form[0].appendChild(successDiv)
    }

    showSuccess()
    removeForm()
}

export default successMessage;