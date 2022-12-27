let nameEl = document.getElementById("name-output");
let input = document.querySelector("input#name-input");

input.addEventListener('input', onInputChange);


function onInputChange(event){
nameEl.textContent=event.currentTarget.value;
}