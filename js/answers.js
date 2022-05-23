//import { getElements } from '../js/getElement.js';

//export function answers() {
//const allAnswers = document.querySelectorAll('[data-js="bookmark"]');

//allAnswers.forEach(showButton => {
//showButton.addEventListener('click', () => {
//showButton.classList.toggle('show__answer--active');
//});
//});
//}

export function answers() {
  const showButton = document.querySelector('[data-js="show-answer"]');
  const answerText = document.querySelector('[data-js="answer-display"]');

  showButton.addEventListener('click', () => {
    answerText.classList.toggle('show__answer--active');
    //showButton.textContent = 'Hide Answer';
  });
}
