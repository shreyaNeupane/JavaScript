// Method Chaining = calling one method after another
//                     in one continous line of code

let username = window.prompt("enter your username");
//---------------- NO method CCHAINING ---------------------

// username = username.trim(); // removes space before character
// let letter = username.charAt(0); 
// letter = letter.toUpperCase(); // makes charat(0) upper case

// let extraChars = username.slice(1); // removes first charcter
// extraChars = extraChars.toLowerCase(); // makes remaininf character to lower case
// username = letter+extraChars;
// console.log(username);

// --------------------Method CHAINING --------------------

username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);