// How to accept user input

//1. EASY WAY = window prompt
//2. PROFESSIONAL WAY = HTML textbox

// let username;

// username = window.prompt("Whats your username? ");

// console.log(username);
let username;
document.getElementById("mysubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent =`Hello ${username}`;
};
