import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const savedState = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};

emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

form.addEventListener(
  'input',
  throttle(() => {
    const currentState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(currentState));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(currentState);
  localStorage.removeItem(FEEDBACK_KEY);
  emailInput.value = '';
  messageInput.value = '';
});
