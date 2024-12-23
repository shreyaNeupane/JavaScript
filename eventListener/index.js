// eventListener = Listen for specific events to create interactive web pages
//                  events: click , mouseover, mouseout
//                  .addEventListener(event , callback);
//                  .addEventListener(event , anonymous function);
//                  .addEventListener(event , arrow function);

const myBox = document.getElementById("myBox");


myBox.addEventListener("click" , function(event){
    
      event.target.style.background = "tomato";
      event.target.textContent = "OUCH ! 😫";
    
});

myBox.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = " Dont do it 🫨";
});

myBox.addEventListener("mouseout", event=> {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = " click me 😁";
});