const names = ["alice", "bOB", "ChArLie"];

// Capitalize the first letter of each name
const capitalize = names.map((name) => {
     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
    });
console.log(capitalize);

// Reverse each name

// name.split(""):
// Splits the string name into an array of individual characters.
// Example: "John" becomes ["J", "o", "h", "n"].

// .reverse():
// Reverses the array of characters.
// Example: ["J", "o", "h", "n"] becomes ["n", "h", "o", "J"].

// .join(""):
// Joins the reversed array back into a single string.
// // Example: ["n", "h", "o", "J"] becomes "nhoJ".
const reverse = names.map((name)=>{
    return name.split("").reverse().join("");
});
console.log(reverse);