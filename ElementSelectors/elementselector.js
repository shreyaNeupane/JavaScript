//element selectors = Methods used to target and manipulate HTML elements
//                   They allow you to select one or multiple HTML elements
//                   from the DOM (Document Object Model).

// 1. document.getElementById()        // returns ELEMENT OR NULL if id doesnot exit
// 2. document.getElementByClassName() // HTML COLLECTION
// 3. document.getElementByTagName()   // HTML COLLECTION
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySelectorAll()      // NODELIST


// -----------------1. document.getElementById() -----------------------

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading); // displays heading properties

//  -----------------2. document.getElementByClassName() --------------

const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);

// fruits[0].style.backgroundColor = "red";
// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";


// we cannot use forEach cause html collection dont have forEach method
// so we type cast our HTML collection into array

//  Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
//  });

//--------------------document.getElementByTagName()------------------
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// console.log(h4Elements);
// h4Elements[0].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }
// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "lightgreen";
// }
Array.from(h4Elements).forEach(h4Element =>{
    h4Element.style.backgroundColor = "yellow";
});
Array.from(liElements).forEach((liElement) => {
  liElement.style.backgroundColor = "lightgreen";
});