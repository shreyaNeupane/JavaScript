// eventListener = Listen for specific events to create interactive web pages
//                  events: keydown, keyup  
//                  document.addEventListener(event, callback);

let keyPressed = {};

document.addEventListener("keydown", (event) => {
 
    console.log(`key down = ${event.key}`);
    
});

document.addEventListener("keyup", (event) => {
  console.log(`key up = ${event.key}`);
  
});
