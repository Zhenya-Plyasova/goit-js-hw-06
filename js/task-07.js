const fontSizeControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text")

fontSizeControl.addEventListener('input', onInputInput)

function onInputInput(event){
    spanText.style.fontSize=`${Number(event.currentTarget.value)}px`;
}