 // function = A section of reusable code.
 //            declare code once , use it whenever you want
 //            call the function to execute that code.

//  function happyBirthday(username , age){
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday to dear ${username}`);
//     console.log("Happy Birthday to you");
//     console.log(`you are ${age} years old`);
//  }

// happyBirthday("shreya",21);
// happyBirthday("Avi", 25);

function add(x,y){
   return x+y;
}

function sub(x, y) {
  return x -y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x - y;
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
   return email.includes("@") ? true :false;
}
// console.log(isEven(9));
console.log(isValidEmail("shreya@gmail.com"));