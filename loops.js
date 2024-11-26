//  while loop = repeat some code while some condition is true
//  do while loop = first execute the code and check the condition

let loggedIn = false;
let username;
let password;

// while(!loggedIn){
//      username = window.prompt(`Enter your username`);
//      password = window.prompt(`Enter your password`);

//      if(username === "myUsername" && password === "mypassword"){
//         loggedIn = true;
//         console.log("You are logged in !");
//      }
//      else{
//         console.log("Invalid credentials! please try again");
//      }
// }
 

//   do while loop = first execute the code and check the condition

// do{
//      username = window.prompt(`Enter your username`);
//      password = window.prompt(`Enter your password`);

//      if(username === "myUsername" && password === "mypassword"){
//         loggedIn = true;
//         console.log("You are logged in !");
//      }
//      else{
//         console.log("Invalid credentials! please try again");
//      }
// }while(!loggedIn)


// for loop = repeat some code a LIMITED amount of times
// contine = continues after some codition
// break = breaks form a loop entirely

for( let i = 1; i <= 20; i++ ){
   if( i == 13){
      continue;
   }
   console.log(i); 
}
