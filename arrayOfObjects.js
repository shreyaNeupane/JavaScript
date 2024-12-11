// ways to work with array objects

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "orange", color: "orange", calories: 150 },
  { name: "coconut", color: "white", calories: 190 },
  { name: "pinapple", color: "yellow", calories: 78 },
];

// fruits.push({name: "grapes", color: "purple", calories: 62});

// console.log(fruits[3].name);
// console.log(fruits[3].color);
// console.log(fruits[3].calories);
// console.log(fruits);

// fruits.splice(1,2); // removes element on some indexes
// fruits.pop();

//----------for each()-----------

// fruits.forEach(fruit =>console.log(fruit));

//--------------map() ---------------

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map((fruit) => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// -----------filter() -------------------
// const yellowfruits = fruits.filter(fruits => fruits.color === "yellow");
// const lowCalFruits = fruits.filter(fruits => fruits.calories < 100);
// const highCalFruits = fruits.filter((fruits) => fruits.calories > 100);

// console.log(lowCalFruits);
// console.log(highCalFruits);
// console.log(yellowfruits);

//-------------------  reduce() --------------- returns a single value

const maxFruit = fruits.reduce((max , fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);
console.log(maxFruit.calories);

const minFruit = fruits.reduce((min, fruit) =>
                                fruit.calories < min.calories ? 
                                fruit : min
);
console.log(minFruit.calories);

