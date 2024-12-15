// Error = An Object that is created to represent a problem that occurs 
//          often with user input or extablishing a connection

// try{ } = Encloses code that might potentially cause an error
// catch{ } = catch and handle any thrown Errors form try { }
// finally { } = (optional) Always executes . Used mostly for clean up
//               ex. close files, close connections , release resources.



// try{
//     console.log(x);
//     //NETWROK ERRORS
//     //PROMISE REJECTION
//     //SECURITY ERRORS
// }
// catch(error){
//     console.error(error);
// }
// finally{
//       // CLOSE FILES
//       // CLOSE CONNECTIONS
//       // RELEASE RESOURCES  
//       console.log("this always executes even if error occurs or not");
// }
// console.log("You have reached the end!");


try{
    const dividend = Number(window.prompt("Enter a dividend"));
    const divisor = Number(window.prompt("enter a divisor"));
     
    if(divisor == 0){
        throw new Error ("You can't divide by zero!");
    }
     if(isNaN (dividend) || isNaN (divisor)){
        throw new Error("values must be a number");
     }
    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}


console.log("you have reached the end!");