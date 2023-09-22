// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);
window.addEventListener('load', populateData);

const savedData = {};

function onInputForm(event) {
    if (event.target.value) {
    savedData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(savedData));
    }
    
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
    localStorage.removeItem(localStorageKey);
}



