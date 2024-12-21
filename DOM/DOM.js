// DOM = DOCUMENT OBJECT MODEL 
//       objects{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       web browser constructs the DOM when it loads an HTML document,
//       and sreucture all the elements is a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the conten , structure , and style of a web page.

const username = " Shreya";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? ` Guest` : username;

document.title = " my website"; // changes title name form js file
console.dir(document);
