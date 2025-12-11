const changeBut = document.querySelector(".change-color");
const spanCol = document.querySelector(".color");

changeBut.addEventListener("click", () => {
    let color = getRandomHexColor();
    spanCol.textContent = color;
    document.body.style.backgroundColor = color;
})




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
