// import throttle from "lodash.throttle";

// const form = document.querySelector('.feedback-form');
// const input = document.querySelector('[name = "email"]');
// const textarea = document.querySelector('[name="message"]');
// const localStorageKey = "feedback-form-state";


// form.elements.email.value = localStorage.getItem(localStorageKey) ?? "";
// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener('submit', onSubmitForm);
// input.addEventListener('input', onInputEmail);
// textarea.addEventListener('input', onInputTextarea);

// function onSubmitForm(event) {
//     event.preventDefault();
//     event.currentTarget.reset();
// }

// function onInputEmail(event) {
//     const email = event.currentTarget.value;
//     localStorage.setItem(localStorageKey, email);
// }

// function onInputTextarea(event) {
//     const textareaMessage= event.currentTarget.value;
//     localStorage.setItem(localStorageKey, textareaMessage);
// }

// function populateTextarea() {
//     const savedTextarea = localStorage.getItem(localStorageKey);

//     if (savedTextarea) {
//         textarea.textContent = 'savedTextarea';
//     }
// }

const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);
window.addEventListener('load', populateData);

const savedData = {};

function onInputForm(event) {
    savedData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(savedData));
}

function populateData(event) {
    const storageData = JSON.parse(localStorage.getItem(localStorageKey));
    
    if (storageData) {
        form.elements.email.value = storageData.email || '';
        form.elements.message.value = storageData.message || '';
    }
}

function onSubmitForm(event) {
    event.preventDefault();
    form.reset();
}



