// ------------ EXAMPLE 2 <li>--------------------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

//STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newListItem); // appends at end of body as a last child
//document.body.prepend(newListItem);  // appends at First of body
document.getElementById("fruits").prepend(newListItem); // appends inside box one as a first child.
// document.getElementById("box1").append(newH1); 

//  const orange = document.getElementById("orange");
//  document.getElementById("fruits").insertBefore(newListItem , orange); //inserts h1 before box2


// if htmal tag doesnot have id
 const boxes = document.querySelectorAll("#fruits li");
 document.getElementById("fruits").insertBefore(newListItem,boxes[0]);

 //REMOVE THE ELEMENT
 document.getElementById("fruits").removeChild(newListItem);