
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

// myButton.addEventListener(event , callback)

 myButton.addEventListener("click", event=>{
   
    if(myImg.style.visibility === "hidden"){
      myImg.style.visibility = "visible";
      myButton.textContent = "hide";
    }else{
      myImg.style.visibility = "hidden";
        myButton.textContent = "show";
    }
    
 })