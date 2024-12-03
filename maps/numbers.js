const numbers = [1,2,3,4,5];

// Double each number
const doublee = numbers.map((element) => element * 2);
console.log(doublee);
// function double(element){
//     return element*2;
// }

// subtract 1 form each number
const minusOne = numbers.map((element) => element-1);
console.log(minusOne);

//find the square root of each number
const sqRoot = numbers.map((element) => Math.sqrt(element));
console.log(sqRoot);