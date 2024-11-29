

function rollDice(){
  // For example, if the user enters 5 in the input field, the .value property will return "5".
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    //if the user enters 5 in the input field, the .value property will return "5". this same thing is repeated as it is inside loop it wiill give 5 different numbers
    const value = Math.floor(Math.random() * 6) + 1;
    //    console.log(value);
    values.push(value);
    // Adds an HTML <img> element to the images array, representing the dice roll as an image.
    images.push(`<img src ="images/${value}.png" alt="Dice ${value}">`);
  }
  //  console.log(values);
  //Displays the rolled dice values as plain text.
  //values.join(',') converts the values array into a comma-separated string. For example, [4, 2, 6, 3, 1] becomes "4, 2, 6, 3, 1".
  diceResult.textContent = `dice: ${values.join(",")}`;
  //Displays the rolled dice as images.
  //images.join('') converts the images array into a single string by concatenating all the <img> tags without any separator.
  diceImages.innerHTML = images.join("");
}