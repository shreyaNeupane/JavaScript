// // getter = special method that makes a property readable
// // setter = special method that makes a property writeable

// // validate and modify a value when reading/writing a property

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.log("Width must be a positive number");
//     }
//   }
//   set height(newheight) {
//     if (newheight > 0) {
//       this._height = newheight;
//     } else {
//       console.log("Width must be a positive number");
//     }
//   }
//   get width(){
//     return `${this._width.toFixed(1)}cm`;
//   }
//   get height(){
//     return `${this._height.toFixed(1)}cm`;
//   }
//   get area(){
//    return  `${(this._width * this._height).toFixed(1)}cm`;
//   }
// }

// const rectangle = new Rectangle(1,2);
// rectangle.width = 5;
// rectangle.height = 8;
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);



class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.log("Username must contain only characters");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.log("Username must contain only characters");
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" ) {
      this._age = newAge;
    } else {
      console.log("Username must contain only characters");
    }
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get fullname(){
    return this._firstName + " " +this._lastName;
  }
}
const person1 = new Person("shreya","Neupane",25);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullname);
console.log(person1.age);
