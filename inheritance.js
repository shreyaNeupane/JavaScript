// Inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code resuability

class Animal{
    alive  = true;
    eat(){
        console.log(`THis ${this.name} is eating`);
    }
    sleep(){
        console.log(`THis ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`${this.name} is running`);
    }
}
class Fish extends Animal {
  name = "fish";
 swims() {
    console.log(`${this.name} is swimming`);
  }
}
class Hwak extends Animal {
  name = "hwak";
  fly() {
    console.log(`${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish  = new Fish();
const hwak = new Hwak();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swims();

console.log(hwak.alive);
hwak.eat();
hwak.sleep();
hwak.fly();