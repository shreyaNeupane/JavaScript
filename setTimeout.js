// setTimeout() = function in javaScript that allows you to schedule
//                the execution of a function after an amount of time(milliseconds)
//                Times are approximate (varies based on the workload of the javasceipt runtime env.)
//                setTimeout(callback, delay);

// setTimeout(function(){window.alert("Hello") }, 3000); 

let timeoutId;
function startTimer(){
    timeoutId = setTimeout(function () {
      window.alert("Hello");
    }, 3000);
    console.log("STRATED");
}

function clearTimer(){
        clearTimeout(timeoutId);
       console.log("CLEARED")
}
