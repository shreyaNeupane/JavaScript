// const = a varaible that can't be changed

const PI = 3.14; // capitalzing constant name for constant is only for primitive datatypes like (Number , boolean)

let radius;
let circumference;



console.log(circumference);

 document.getElementById("mySubmit").onclick = function(){
     radius = document.getElementById("myText").value;
     radius = Number(radius);

     circumference = 2 * PI * radius;
     document.getElementById("myH3").textContent = circumference + "cm";

 }