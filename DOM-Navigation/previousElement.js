// --------------------- .previousElementSibling ----------------------
// opposite of next element
const element = document.getElementById("banana");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

const elements = document.getElementById("desserts"); // orange is sibling of apple
const nextSibling = elements.previousElementSibling;
nextSibling.style.backgroundColor = "yellow";