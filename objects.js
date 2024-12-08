// object = A collection of related properties and/or methods
//          can represent real world objects (people , products , places)
//          object = {key:value,
//                     function()}

const person ={
    firstName : "Spongebob",
    lastName : "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hello i am spongebob");},
    eat: () =>console.log("I am eating a krabby patty"),
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();
person.eat();

const person1 = {
  firstName: "Shreya",
  lastName: "Neupane",
  age: 21,
  isEmployed: false,
  sayHello: function () {
    console.log("Hello i am shreya");
  },
  eat: () => console.log("I am eating rice"),
};
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();