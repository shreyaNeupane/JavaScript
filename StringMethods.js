// string methods = allow you to manipulate the work with text (strings)

let username = "shreya Neupane";

console.log(username.charAt(2));
console.log(username.indexOf("r"));
console.log(username.lastIndexOf("r"));
console.log(username.length);
console.log(username.indexOf("r"));

username=username.trim(); // trims white space before or after string
console.log(username);


username = username.toUpperCase();
console.log(username);

username = username.toLowerCase();
console.log(username);

// let result = username.startsWith(" "); // checking if it starts with space
// if(result){
//     console.log("Your username cant begin with ' '");
// }
// else{
//     console.log(username);
// }

// let result = username.endsWith(" "); // checking if it ends with space
// if(result){
//     console.log("Your username cant end with ' '");
// }
// else{
//     console.log(username);
// }

let result = username.includes("a"); // checking if includes space
if (result) {
  console.log("Your username cant have a");
} else {
  console.log(username);
}


let phoneNumber = "026-521-009"; // string doesnot stores numbers but here we are storing them as character

// phoneNumber = phoneNumber.replaceAll("-" , "");
// console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart (15, "0"); // adding 0 at front until its 12 charcter long
// console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15, "0"); // adding 0 at end until its 12 charcter long
console.log(phoneNumber);
