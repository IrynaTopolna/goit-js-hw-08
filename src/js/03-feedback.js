import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('.feedback-form input');
const messageRef = document.querySelector('.feedback-form textarea');

const formData = {
  email: '',
  message: '',
};
const FORM_KEY = 'feedback-form-state';

returnSavedData();

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(
    FORM_KEY,
    JSON.stringify({ email: emailRef.value, message: messageRef.value })
  );
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (emailRef.value === '' || messageRef.value === '') {
    return alert('Please fill in all the fields!');
  } else console.log(localStorage.getItem(FORM_KEY));

  evt.currentTarget.reset();

  localStorage.removeItem(FORM_KEY);
}

function returnSavedData() {
  const savedData = JSON.parse(localStorage.getItem(FORM_KEY));

  if (savedData) {
    emailRef.value = savedData.email || '';
    messageRef.value = savedData.message || '';
  }
}
