let counterValue = 0;

const increment = document.querySelector('button[data-action="increment"]');

const decrement = document.querySelector('button[data-action="decrement"]');

const value = document.getElementById("value");


function onIncrementBtnClick(click){
    counterValue+=1;
    console.log(counterValue);
    value.textContent=counterValue;
};

function onDecrementBtnClick(click){
    counterValue-=1;
    console.log(counterValue);
    value.textContent=counterValue;
}

increment.addEventListener("click", onIncrementBtnClick);

decrement.addEventListener("click", onDecrementBtnClick);
