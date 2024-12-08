// super = keyword is used in classes to call the constructor or 
//         access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent

class Animal{
    constructor(name, age){
            this.name = name;
            this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}kmh`);
    }
}
class Rabbit extends Animal{
    constructor(name , age , runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`This ${this.name} can swim`);
     super.move(this.swimSpeed);
  }
}
class Hwak extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);

    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`This ${this.name} can fly`);
     super.move(this.flySpeed);
  }
}
const rabbit = new Rabbit ("rabbit",2,25);
const fish = new Fish("jelly", 1, 5);
const hwak= new Hwak("hwak", 2, 20);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

rabbit.run();
fish.swim();
hwak.fly();