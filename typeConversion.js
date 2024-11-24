// type conversion = change the datatype of a value  to another 
                    // (Strings , numbers , booleans)

// let age = window.prompt(" How Old are you?");
// age = Number(age);
// age+=1; /* here if the above line is not used which is converting 
//                 into number type . it will display 211 ( if you enter 21) it supposs age is string and appends 1 */
// console.log(age);

let x ="pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // displays Nan ( which is not a number) 'number'
console.log(y, typeof y); // displays String 'string'
console.log(z, typeof z); // true 'boolen'