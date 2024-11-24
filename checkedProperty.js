 // .checked = property that determines the checked state of an 
 //             HTML checkbox or radio button element

const mycheckBox = document.getElementById("mycheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(mycheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }else{
        subResult.textContent = `you are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are payingwith visa`;
    }
    else if (masterCardBtn.checked) {
      paymentResult.textContent = `You are payingwith MasterCard`;
    }
    else if (payPalBtn.checked) {
      paymentResult.textContent = `You are paying with payPal`;
    }
    else{
        paymentResult.textContent = `you must select a payment type`;
    }
    
}