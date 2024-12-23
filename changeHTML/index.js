// ------------------- EXAMPLE 1 <h1> ----------------------

//-------------------------------STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// ----------------------- STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id="myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// ------------------ STEP 3 APPEND ELEMENT TO DOM
//  document.body.append(newH1); // appends at end of body as a last child
//document.body.prepend(newH1);  // appends at First of body
//document.getElementById("box1").prepend(newH1); // appends inside box one as a first child.
document.getElementById("box1").append(newH1); // appends inside box one as a last child.

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2); //inserts h1 before box2

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[1]);


//------------------------ REMOVE HTML ELEMENT----------
//  document.body.removeChild(newH1);
 document.getElementById("box1").removeChild(newH1); // here box1 is selected because box1 is parent of h1 element