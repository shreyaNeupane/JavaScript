
// RANDOM NUMBER GENERATOR 


// const min = 1;
// const max = 6;

// // Math.floor rounds up to highest number
// let randomNum = Math.floor(Math.random() * 6)+1;// Math.random generates random number form 0 to 6 adding 1 makes math.floor round up form 1 to 6 whole numbers.
// console.log(randomNum);

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("label1");
const Label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}