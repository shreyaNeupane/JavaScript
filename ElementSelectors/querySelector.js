// 4. document.querySelector()          returns FIRST ELEMENT OR NULL
const element = document.querySelector(".fruits");

// element.style.backgroundColor = " yellow";  // changes apple backgroundcolor into yellow cause its first element of fruits
// console.log(element);

//5. document.querySelectorAll() ===========     returns NODELIST has built-in methods

const fruits = document.querySelectorAll("fruits");

// fruits[0].style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");
// console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "lightgreen";
})

