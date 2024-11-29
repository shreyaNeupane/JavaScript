//   variable scope = where a variable is recognized 
//                      and accessible (local vs global)


let x = 3;  // global varaiable

function function1(){
    let x = 1; // local variable
    console.log(x);
}
function function1() {
  let x = 3;   // local variable
  console.log(x);
}