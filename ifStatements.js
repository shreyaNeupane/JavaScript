// if statement = if a contion is true , excute some code
//                  if not , do something else

// let age = 13;
// let hasLincense = true;

// // Nested If
// if(age >= 18){
//     console.log("you can vote");
//     if(hasLincense){
//         console.log("you have got license");
//     }else{
//          console.log("you donot have license yet");
//     }
// }else{
//      console.log("you cannot vote");
// }


// //if-else Statement
// let isStudent = true;
// if(isStudent ){
//     console.log("your are a student")
// }
// else{
//     console.log("you are not student");v 
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;
mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
if(age > 100){
    resultElement.textContent = `you are too old to access this site`;
    
}
else if(age >= 18){
     resultElement.textContent = `you can access this site`;

}
else if(age < 0){
     resultElement.textContent = `age cannot be Zero`;
}
else{
     resultElement.textContent = `you cannot access this site`;
}
}
