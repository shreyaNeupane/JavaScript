// synchronus = Executes line by line consecutively in a squential manner
//              code that waits for an operation to complete.

// aynchronus = Allows multiple operations to be performed concurrently
//              without waiting Doesn't block the execution flows and
//              allows the program to continue 
//              (I/O operations , network requests , fetching data )
//              Handled with: callbacks , Promises , Async/Await 

// -------- Synchronus ------------
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// ------------- Asynchronus ------------
// here we are handling asynchronus using 
function func1(callback){
    setTimeout(() => {console.log("Task 1"); 
                        callback()}, 3000); // task 1 executes after 3 seconds
}
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);

