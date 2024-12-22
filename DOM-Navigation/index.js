// DOM Navigation =  The process of navigating through the structure
//                   of an HTML document using javaScript.

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.parentElement
//.children

//-----------------.firstElementChild----------------------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild; //selects first element of fruits.
firstChild.style.backgroundColor = "yellow";



const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild; //selects first element of ul tag
    firstChild.style.backgroundColor = "yellow";
});
