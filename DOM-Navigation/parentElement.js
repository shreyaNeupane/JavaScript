// ------------------ parentElement ---------------------------
// whatever you select , it selects parent of that element
// const element = document.getElementById("potatoes");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

//-----------------------children ---------------------
// selects children of elements you select
const element = document.getElementById("fruits");
const children = element.children;

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "yellow";
// })

 children[1].style.backgroundColor = "yellow";