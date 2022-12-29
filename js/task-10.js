function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");
const input = document.querySelector("input");

let numberOfBoxes = 0;

input.addEventListener("input", onInputInput);
function onInputInput(event){
  numberOfBoxes = Number(event.currentTarget.value);
  console.log(numberOfBoxes);
}


createButton.addEventListener("click", onCreateButtonClick);
destroyButton.addEventListener("click", onDestroyButtonClick);

function onCreateButtonClick(event){
  createBoxes(numberOfBoxes);
}

function onDestroyButtonClick(event){
container.innerHTML="";
}
let boxesString="";

function createBoxes(amount){
const boxes = [];

for (let index = 0; index < amount; index++) {


  boxes.push(`<div style="width:${30+index*10}px; height:${30+index*10}px; background:${getRandomHexColor()}"></div>`);
  
}
boxesString = boxes.join("");
container.insertAdjacentHTML("afterbegin", boxesString);

}