//Filtering Objects in Arrays
const users = [
    { name: "Alice" , age: 25},
    { name: "Bob" , age:17},
    { name: "Charlie" , age:19},
];

const adults = users.filter(user =>user.age >= 18);
console.log(adults);

//Combining with Other Array Methods Use .filter() with .map() or .reduce() for complex operations.

const numbers = [1,2,3,4,5,6];
const doubledEvenNumbers = numbers
  .filter(num => num % 2) // Filter even numbers
  .map(num => num*2); // Double them
console.log(doubledEvenNumbers);

// Multiple Conditions Apply multiple conditions to your filter logic.
const rangeNumbers = numbers.filter(num => num > 10 && num <25);
console.log(rangeNumbers);

// Removing Unwanted Values Use .filter() to remove null, undefined, or other invalid entries.

const items = [null , "apple" , undefined, "banana", "", "kiwi"];
const validItems = items.filter(item => item);
console.log(validItems);

//Filtering Based on Index Filter elements based on their index in the array.
const fruits = ["apple","orange","banana","kiwi"];
const oddIndexFruits = fruits.filter((fruit,index) => index % 2 == 0);
console.log(oddIndexFruits);

