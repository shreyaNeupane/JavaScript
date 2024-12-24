// eventListener = Listen for specific events to create interactive web pages
//                  events: click , mouseover, mouseout
//                  .addEventListener(event , callback);
//                  .addEventListener(event , anonymous function);
//                  .addEventListener(event , arrow function);

const myButton = document.getElementById("myButton");
const myBox = document.getElementById("myBox");

myButton.addEventListener("click" , function(event){
    
      myBox.style.background = "tomato";
      myBox.textContent = "OUCH ! 😫";
    
});

myButton.addEventListener("mouseover", event => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = " Dont do it 🫨";
});

myButton.addEventListener("mouseout", event=> {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = " click me 😁";
});