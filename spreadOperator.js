// spread operator =  ... allows an iterable such as an 
//                    array or string to be expanded 
//                    into seperate elements
//                      or append seprate arrays
//                    (unpack the elements)

// let numbers = [1,2,3,4,5];

// // it does work cause array is represented as whole
// //let maximum = Math.max(numbers);
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

// let username = "Shreya Neupane";
// let letters = [...username].join("-");

// console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots" , "spinach" , "potatoes"];

let foods = [ ...fruits, ...vegetables , "eggs" , "milk"];

console.log(foods);

