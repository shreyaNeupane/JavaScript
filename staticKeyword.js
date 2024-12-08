// satic = keyword that defines properties or methods that belong 
//          to the class itself rather than the objects created 
//          from that class (class owns anything static , not the objects)

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(raduis){
//         return raduis * 2;
//     }
//     static  getCircumference(raduis){
//         return 2* this.PI * raduis;
//     }
//     static getArea (raduis){
//         return this.PI * raduis * raduis;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(2));
// console.log(MathUtil.getArea(2));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username ;
        User.userCount++;
        
    }
    static getUserCount(){
        console.log(`there are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello , my username is ${this.username} `)
    }
}
const user1 = new User("Spongebob");
const user2 = new User("patrick");
const user3 = new User("patrick");
console.log(user1.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();
console.log(User.userCount);
console.log(User.getUserCount());