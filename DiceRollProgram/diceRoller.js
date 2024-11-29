

function rollDice(){
    // For example, if the user enters 5 in the input field, the .value property will return "5".
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];   

     for(let i = 0; i < numOfDice ; i++){
       //if the user enters 5 in the input field, the .value property will return "5". this same thing is repeated as it is inside loop it wiill give 5 different numbers
       const value = Math.floor(Math.random() * 6) + 1;
    //    console.log(value);
         values.push(value);
        images.push(`<img src ="images/${value}.png" alt="Dice ${value}">`);
     }
    //  console.log(values);
    diceResult.textContent = `dice: ${values.join(',')}`;
    diceImages.innerHTML = images.join('');
 }