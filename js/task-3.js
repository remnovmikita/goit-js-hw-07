const inputText = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

inputText.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();
  spanText.textContent = value === "" ? "Anonymous" : value;
});