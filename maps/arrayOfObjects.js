const products = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "Tablet", price: 700 },
];

// Add a discount price (10% off)
const discountedPrice = products.map((product) =>{
    return {
        // ...product,
        discountPrice: product.price*0.9,
    };
});
console.log(discountedPrice);

// Extract only the names
const productNames = products.map((product) => product.name);
console.log(productNames);