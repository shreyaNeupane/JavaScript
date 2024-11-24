// String slicing = create a substring from a portion of another string
//                  form a portion of another string

//                  string.slice(start,end)

const fullName = "Shreya Neupane";
// let firstName = fullName.slice(0, 6); // outputs Shreya index starts form 1
// let lastName = fullName.slice(7); // outputs Neupane doesnot counts space

// let firstChar = fullName.slice(0,1);
// let lastchar = fullName.slice(-2); // starts form end

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastchar);

// let firstName = fullName.slice(0 , fullName.indexOf(" "));
// let lastName  = fullName.slice(fullName.indexOf(" ") + 1); // you include ending index too.
// console.log(firstName);
// console.log(lastName);


const email = "shreya22@gmail.com";
let username = email.slice(0,email.indexOf("@")); // outputs shreya22
let extension = email.slice( email.indexOf("@")+1); // outputs  gmail.com
console.log(username);
console.log(extension);
