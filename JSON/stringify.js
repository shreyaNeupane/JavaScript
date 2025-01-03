// JSON = (javascript Object Notation) data-interchange format
//         used for exchanging data between a server and a web application
//          JSON files {key:value} OR {value1 , value2 , value3}

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a  JSON string to a JS object

const names = ["Spongebob", "patrick", "squidward", "sandy"];
const person = {name: "Spongebob",age: 30,isEmployed: true,hobbies: ["Jellyfishing", "karate", "cooking"],};
const people = [
  {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
  },
  {
    name: "Patrick",
    age: 34,
    isEmployed: false,
  },
  {
    name: "Sandy",
    age: 32,
    isEmployed: false,
  },
  {
    name: "Squidward",
    age: 50,
    isEmployed: false,
  },
];
const jsonString = JSON.stringify(people);
console.log(jsonString);
