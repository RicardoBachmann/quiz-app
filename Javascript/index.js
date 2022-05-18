console.clear();

const showButton = document.querySelector('[data-js="action-button"]');
const showAnswerText = document.querySelector('[data-js="show-answer-text"]');
console.log(showButton);

function onButtonClick() {
  showAnswerText.classList.add("show-answer--active");
}

showButton.addEventListener("click", onButtonClick);
