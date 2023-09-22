import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

const savedData = {};

function onInputForm(event) {
    if (event.target.value) {
        savedData[event.target.name] = event.target.value;
        localStorage.setItem(localStorageKey, JSON.stringify(savedData));
    }
    
}
populateData();

function populateData() {
    const storageData = JSON.parse(localStorage.getItem(localStorageKey));
    
    if (storageData) {
        form.elements.email.value = storageData.email || '';
        form.elements.message.value = storageData.message || '';
        savedData.email = storageData.email || '';
        savedData.message = storageData.message || '';
    }
}

function onSubmitForm(event) {
    event.preventDefault();
    form.reset();
    localStorage.removeItem(localStorageKey);
}



