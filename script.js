const signupForm = document.querySelector('.signup-form');

const getAllInputChild = (form) => {
    const children = form.children;
    const inputElements = [];

    for (let child of children) {
        if (child.nodeName === 'INPUT') {
            inputElements.push(child);
        }
    }
    return inputElements;
};

const getInputChildByName = (name, form) => {
    const inputs = getAllInputChild(form);
    for (let input of inputs) {
        if (input.getAttribute('name').toLowerCase() === name) {
            return input;
        }
    }
    return null;
};

const getInputsValue = (form) => {
    const inputs = getAllInputChild(form);
    const userInput = {};
    for (let input of inputs) {
        userInput[input.getAttribute('name')] = input.value;
    }
    return userInput;
};

const onFormSubmit = function (event) {
    event.preventDefault();
    const inputs = getAllInputChild(this);
    const emailInput = getInputChildByName('email', this);
    const errorMessage = document.querySelector('.error-message');

    for (let input of inputs) {
        if (input.value.trim() === '' || !emailInput.value.includes('@')) {
            const errorMessageClasses = errorMessage.classList;
            if (errorMessageClasses.contains('hide')) {
                errorMessageClasses.remove('hide');
                return;
            }
        }
    }

    errorMessage.classList.add('hide');
    console.log(getInputsValue(this));
};

signupForm.addEventListener('submit', onFormSubmit);
