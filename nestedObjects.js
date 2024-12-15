// nested objects = objects inside of other Objects. 
//                  Allows you to represent more complex data structure
//                  child Object is enclosed by a prent Object.

//                  person{Address{} , ContactInfo{}}
//                  ShoppingCard{keyword{}, Mouse{} , Monitor{}}

// ------------------ EXAMPLE 1 -------------------
// const person = {
//     fullName: "Spongebob Sqaurepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["book reading","jellyfishing","cooking"],
//     address: {
//         street: "124 Conch st.",
//         city: "Bikini Bottom",
//         country: "Int. water"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// // console.log(person.address.street);
// // console.log(person.address.city);
// // console.log(person.address.country);

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// ------------------ EXAMPLE 2 -------------------

class Person{
    constructor(name,age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}


class Address{
    constructor(street , city , country){
       this.street = street;
       this.city = city;
       this.country = country;
    }
}

const person1 = new Person ("Spongebob" , 30 , "124 Conch st." ,
                                                "Bikini Bottom" ,
                                                "Int. Waters");  
                                            

const person2 = new Person("patrick",30, "124 Conch st.",
                                           "jamungachii",
                                           "Int. Waters"); 
                                           
                                           
const person3= new Person(
  "squidward",
  45,
  "124 Conch st.",
  "Bikini Bottom",
  "Int. Waters"
);  


console.log(person1.age);
console.log(person1.address.city);
console.log(person2.address.city);
                                       
