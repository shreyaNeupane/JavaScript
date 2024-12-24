// NodeList = static collection of HTML elements by (id , class , element)
//            can be created by using querySelectorAll()
//            Similar to an array, but no(map,filter,reduce)
//            NodeList won't update to automatically reflect changes

  let buttons = document.querySelectorAll(".myButtons");

  console.log(buttons);

  // ADD HTML/CSS PROPERTIES

  buttons.forEach(button =>{
      button.style.backgroundColor = "lightgreen";
      button.textContent +="😁";
  });

  //CLICK Event Listener

  buttons.forEach(button =>{
    button.addEventListener("click" , event =>{
        event.target.style.backgroundColor = "tomato";
    });
  });

  //MOUSEOVER + MOUSEOUT event listener
buttons.forEach(button => {
    button.addEventListener("mouseover" , event =>{
        event.target.style.backgroundColor = "hsl(120, 73%, 45%)";
    })
})
buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(120, 73%, 75%)";
  });
});

//ADD AN ELEMENT
// step 1
const newButton = document.createElement("button");
//step 2 -add HTML/CSS properties
newButton.textContent = "Button 5 😁";
newButton.classList="myButtons"; //adding class  to button
//step 3 - append element to DOM 
document.body.appendChild(newButton);

buttons = document.body.querySelectorAll(".myButtons");
console.log(buttons);

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click" , event =>{
         event.target.remove(); // this removes button form display but nodelist of button is not removed
        // console.log(buttons);
        // to remove form nodelist
        buttons = document.querySelectorAll(".myButtons"); // adding this will remove  nodelist too
        console.log(buttons);
       
    })
})



