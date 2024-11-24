// ternary operator = a shortcut to if{} and else{} statements   
//                      helps to assign a variable based on conditio
//                      condition ? codeifTrue : codeIfFalse

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message);

// let time = 9;
// let greeting = time < 12 ? "Good Morning!" : "Good afternoon!";
// console.log(greeting);

// let isStudent = true;
// let check = isStudent ? "You are a student" : "You are not student";
// console.log(check);

let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`your total is $${purchaseAmount - purchaseAmount* (discount/100)}`);