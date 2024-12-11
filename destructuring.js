// destructing  = extract values from arrays and objects,
//                then assign them to variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perdorm object destructuring

//-------------EXAMPLE 1------------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;
// let temp;

//  [a,b] = [b,a]

//  console.log(a);
//  console.log(b);

//-------------EXAMPLE 2------------
// SWAP 2 ELEMENTS IN ARRAY

// const colors = [ "red" , "green" ,"blue" , "black" , "white"];

// [colors[0], colors[4]] = [colors[4],colors[0]];

// console.log([colors]);


//-------------EXAMPLE 3------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];

// const [ firstColor ,secondColor , thirdColor , ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors); // here new array is displayed created using rest parameter ...extraColors

// -------------- EXAMPLE 4 -----------------
// EXTRACT VALUES FROM OBJECTS
// const person1 = {
//      firstname: "Spongeboob",
//      lastname: "SquarePants",
//      age: 30,
//      job: "Fry Cook",
// }

// const person2 = {
//     firstname : "Patrick",
//     lastname : "Star",
//     age : 34,
// }

// const {firstname, lastname, age, job="unemployed"} = person2;

// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job);


//------------EXAMPLE 5 ----------------
//DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstname, lastname, age, job="unemployed"}){
       console.log(`name: ${firstname} ${lastname}`);
       console.log(`age: ${age}`);
       console.log(`job: ${job}`);
}

const person1 = {
     firstname: "Spongeboob",
     lastname: "SquarePants",
     age: 30,
     job: "Fry Cook",
}

const person2 = {
    firstname : "Patrick",
    lastname : "Star",
    age : 34,
}
displayPerson(person2);

