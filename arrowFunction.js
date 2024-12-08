// arrow function = a consice way to write function expressions
//                   good or simple function that you use only once 
//                      (parameters) => some code

// const hello = function(){
//     console.log("Hello");
// }

const hello = () =>console.log("Hello");
hello();

const helloname = (name , age) =>{ console.log(`Hello ${name}`)
                                    console.log(`I am ${age} years old`)}; 
helloname("shreya", 21);
let numbers = [1,2,3,4,5];
const squares = numbers.map((element) => Math.pow(element,2));
console.log(squares);
const cubes = numbers.map((element) => Math.pow(element,3));
console.log(cubes);

const evenNums = numbers.filter((element) =>{ return element % 2 === 0});
console.log(evenNums);
const oddNums = numbers.filter((element) => {
  return element % 2 !== 0;
});
console.log(oddNums);
const total = numbers.reduce((accumulator ,element) => accumulator + element);
console.log(total);