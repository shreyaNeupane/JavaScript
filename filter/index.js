// .filter() = creates a new array by filtering out elements

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);
// console.log(evenNums);
// let oddNums = numbers.filter(isOdd);
// console.log(oddNums);

// function isEven(element){
//     return element % 2 == 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }



// const ages = [16,17,18,18,19,20,60];

// function adults(element){
//     return element >= 18;
// }

// let age = ages.filter(adults);
// console.log(age);


const words = ["apple" , "orange" ,"banana" , "kiwi" , "pomogranate" , "coconut"];

const shortWords = words.filter(getShortWords);
console.log(shortWords);
const longWords = words.filter(getLongWords);
console.log(longWords);

function getShortWords(element){
   return element.length <= 6;
}
function getLongWords(element) {
  return element.length > 6;
}