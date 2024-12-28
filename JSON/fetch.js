
fetch("people.json")
    .then(response => response.json())
    //  .then(value => console.log(value))
     .then(values => values.forEach(value => console.log(value.isEmployed)))
     .catch(error => console.error(error));
     
 
