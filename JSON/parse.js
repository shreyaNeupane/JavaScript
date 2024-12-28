//  JSON.parse() = converts a  JSON string to a JS object


 const jsonNames = `["Spongebob", "patrick", "squidward", "sandy"]`;

 const jsonPerson = `{
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["Jellyfishing", "karate", "cooking"]
}`;

 const jsonPeople = `[
  {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
  },
  {
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
  },
  {
    "name": "Sandy",
    "age": 32,
    "isEmployed": false
  },
  {
    "name": "Squidward",
    "age": 50,
    "isEmployed": false
  }
]`;


const parsedData = JSON.parse(jsonPeople);
console.log(parsedData);
