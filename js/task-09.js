function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button");
const color = document.querySelector(".color");

button.addEventListener("click", onButtonClick);

function onButtonClick(event){
  body.style.backgroundColor = getRandomHexColor();
  color.textContent=body.style.backgroundColor;
}
