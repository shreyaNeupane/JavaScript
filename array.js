// array = a variable like structure 
//          that can hold more than 1 value


let fruits = ["apple" , "orange" , "banana"];

fruits[3] = "coconut";
 fruits.push("dragon fruit"); //add element at last of  array
// fruits.pop(""); //removes last element
// fruits.unshift("mango"); // add a element to the begining
// fruits.shift(); // remove element from begining

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple"); // provides index
// console.log(index);
// console.log(numOfFruits);

// for(let i = 0; i<fruits.length ; i++){
//     console.log(fruits[i]);
// }

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}