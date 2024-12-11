// sort() = method used to sort element of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphbet + numbers + symbols) as strings

// let fruits = [1,3,5,4,2,6];

// fruits.sort((a,b) => (a-b));

// console.log(fruits);

const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "patrik", age: 37, gpa: 2.0 },
  { name: "Squidward", age: 15, gpa: 1.9 },
  { name: "Sandy", age: 30, gpa: 4.0 },
];

people.sort((a,b) => b.age - a.age);
// people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

//but this same thing doesnot work for name
people.sort((a, b) => a.name.localeCompare(b.name));