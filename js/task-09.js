function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click", onButtonClick);

function onButtonClick(event){
  body.style.backgroundColor = getRandomHexColor();
console.log("object");
}
