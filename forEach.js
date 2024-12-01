// foEach() = method used to iterate over the elements
//            of an array and apply a specified function (callback)
//            to each element

//              array.forEach(callback)
//              element , index , array are provided




// let numbers = [1,2,3,4,5];
// numbers.forEach(square);

// numbers.forEach(display);

// function double(element , index , array){
//     array[index] = element*2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function square(element , index , array ){
//     array[index] = Math.pow(element , 4);
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple" , "orange" , "banana" , "coconut"];
//fruits.forEach(lowerCase);
//fruits.forEach(upperCase);
// fruits.forEach(capital);
// fruits.forEach(display);

// function upperCase(element){
//     console.log(element.toUpperCase());
// }
// function lowerCase(element) {
//   console.log(element.toLowerCase());
// }
// function capital(element , index , array){
  //Retrieves the first character of the current string (element) using charAt(0). which means in array ater comma every String starts form index 0.
  //element.slice(1):
//  Extracts the rest of the string starting from index 1 (ignoring the first character).
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element){
//     console.log(element);
// }

// ------------- Sum of Array Elements ---------------------

let numbers = [1,2,3,4,5,6,7];


let total = 0;

numbers.forEach((element)=> {
    total += element;
});

console.log("sum:", total);

//--------------------- Double the Numbers-----------------------

let number = [1, 2, 3, 4, 5];

number.forEach((element, index, array)=> {
   array[index] = element*2;
});
console.log("double : ", number);

//------------------------String Transformation: Title Case---------
let words = ["hello world", "javascript is fun", "foreach challenge"];

words.forEach((element , index , array) =>{
    element.split(' ');
    array[index] =
      element.charAt(0).toUpperCase() +element.slice(1);
});
console.log(words);
