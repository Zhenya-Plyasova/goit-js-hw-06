const validationInput = document.querySelector("input");
const dataLength = validationInput.getAttribute("data-length");
validationInput.addEventListener('blur', onInputBlur);

console.log(dataLength);

// function onInputBlur(event){
//     event.currentTarget.value.length===dataLength
//     ? event.currentTarget.classList.add("#validation-input.valid")
//     : event.currentTarget.classList.add("#validation-input.invalid")
// }

function onInputBlur(event){
if (event.currentTarget.value.length===Number(event.currentTarget.getAttribute("data-length"))){
    event.currentTarget.classList.add("valid"),
    event.currentTarget.classList.remove("invalid")

}
else {
    event.currentTarget.classList.add("invalid")
}
}