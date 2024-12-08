// this = refernce to the object where THIS is used 
//        the object depends to the immediate context
//        person.name = this.name

// this kwyword doesnot work with arrow functions

console.log(this); // we are inside window objects and this displays window properties
const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function () {
    console.log(`Hi! I am ${this.name}`);
    
  },
  eat: function() {console.log(`${this.name} is eating ${this.favFood}`)},
};

person1.sayHello();
person1.eat();

const person2 = {
  name: "Shreya",
  favFood: "White Sauce Pasta",
  sayHello: function () {
    console.log(`Hi! I am ${person2.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${person2.favFood}`);
  },
};
person2.sayHello();
person2.eat();
