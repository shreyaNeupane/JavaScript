// RANDOM PASSWORD GENERATOR

function generatePassword(length , includeLowercase , includeUppercase , includeNumbers , includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-/=";

    let allowedChars = "";
    let password = "";
    
    // if (includeLowercase) {
    //   allowedChars += lowercaseChars;
    // } else {
    //   allowedChars += "";
    // }

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // console.log(allowedChars);

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(Atleat 1 set of character needs to be selected)`;
    }
    for(let i = 0; i<length; i++){
      // here our allowedchar contains a to z , A to Z , 0 to 9 , symbols
      // randomIndex is a random integer between 0 and allowedChars.length - 1
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      //If allowedChars = "abcdefghijklmnopqrstuvwxyz" and randomIndex = 3, then allowedChars[3] = "d".
      password += allowedChars[randomIndex];
    }

      return password;
}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

 const password = generatePassword(passwordLength, 
                                    includeLowercase, 
                                    includeUppercase,
                                    includeNumbers, 
                                    includeSymbols);

console.log(`Generated password : ${password}`);