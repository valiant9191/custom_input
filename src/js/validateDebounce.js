import Utils from './utils.js';

function validateDebounce(event) {
    if (event.target.value) {
        if (!event.target.className.match('active')) {
            event.target.className += ' active';
        }
    } else {
        event.target.className = event.target.className.replaceAll('active', '');
    }

    // didn't get how to implement this feature
    // let timeoutId;
    check(event);
    // return () => {
    //     console.log(event.target.value)
    //     // cancel the previous
    //     if (timeoutId) {
    //         clearTimeout(timeoutId);
    //     }
    //     // new timer
    //     timeoutId = setTimeout(() => {
    //         check(event)

    //     }, 500);
    // };
}

function check(event) {
    switch (event.target.id) {
        case 'name':
            Utils.isBetween(event.target.value.length, 2, 25);
            break;
        case 'surname':
            Utils.isBetween(event.target.value.length, 2, 25);
            break;
        case 'email':
            Utils.isEmailValid(event.target.value.trim());
            break;
        case 'password':
            Utils.isPasswordSecure(event.target.value);
            break;
        case 'repeat_password':
            Utils.isPasswordRepeated(event.target.value);
            break;
    }
}

export default validateDebounce;
