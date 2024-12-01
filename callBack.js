// callback = a function that is passed as an argument 
//              to another function

//              used to handle asynchronus operations
//              1. Reading a File
//              2. Network requests
//              3. Interacting with databases

//              "Hey, when you're done , call this next"


// hello(goodbye);
// // the goodbye function is passed as the back argument.
// function hello(back){
//   console.log("Hello!!");
//   //back() executes, which is equivalent to calling goodbye().
//   back();
// }
// function wait(){
//     console.log("wait!!");
// }
// function leave(){
//     console.log("Leave!!");
// }

// function goodbye(){
//     console.log("Goodbye!!");
// }
//  --------------- hOw callback handles asynchronus process -----------
//  console.log("Start");
//  setTimeout(() => {
//    console.log("Processing...");
//  }, 2000); // Runs after 2 seconds
//  console.log("End");

//  --------------- hOw callback handles asynchronus process -----------
async(fetchdata);
function async(callback){

    console.log("Start");
    setTimeout(() => {console.log("Processing...");callback();}, 2000); // Runs after 2 seconds
    
   
}
function fetchdata(){
    console.log("End");
}

 
 
 //sum(displayPage, 1, 2);



// function sum(callback,x,y){
//   let result = x+y;
//   callback(result);
// }

// function displayConsole(result){
//     console.log(result);
    
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }