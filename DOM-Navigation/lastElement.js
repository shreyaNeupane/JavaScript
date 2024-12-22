// -------------------.lastElementChild ----------------------------

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElements) => {
  const lastChildern = ulElements.lastElementChild; //selects first element of ul tag
 lastChildern.style.backgroundColor = "yellow";
});
