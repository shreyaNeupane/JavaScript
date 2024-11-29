// rest parameters = (...rest) allow a function work with a variable
//                      number of agruments by bundling them into array

//                  spread = expands an array into seperate elements 
//                  rest = bundles seperate elements into an array


function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

// openFridge(food1 , food2 , food3 , food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);
