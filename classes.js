// class = (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructor function
//          ex. static keyword , encapsulation , inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`product: ${this.name}`);
    console.log(`price: $${this.price}`);
  }
  displayTotalAmount(){
    return this.price * 1.13;
   
  }
}

const product1 = new Product("Coffe Mug", 5.44);
const product2 = new Product("Coffee Maker",2.10);
const product3 = new Product("Night Suit", 7);



product1.displayProduct();
const total = product1.displayTotalAmount();
console.log(`total price with tax:  $${total.toFixed(2)}`);

product2.displayProduct();
const total2 = product2.displayTotalAmount();
console.log(`total price with tax:  $${total2.toFixed(2)}`);

product3.displayProduct();





