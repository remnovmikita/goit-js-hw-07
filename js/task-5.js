const changeBut = document.querySelector(".change-color");
const spanCol = document.querySelector(".color");

changeBut.addEventListener("click", () => {
    spanCol.textContent = getRandomHexColor();
    document.body.style.backgroundColor = getRandomHexColor();
})




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
