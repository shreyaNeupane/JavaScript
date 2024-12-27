// Promise = An Object that manages asynchronus operations.
//           Wrap a Promise Object around {Asynchronus code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve , reject) => {asynchronus code})

// DO THESE IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve , reject) => {
     setTimeout(() => {
      
      const dogwalked = false;
      if(dogwalked){
 resolve("you walk the dog 🐕");
      }else{
        reject("You DIDN'T walk the dog");
      }
     }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) =>{
       setTimeout(() => {

        const kitchenCleaned = true;
        if(kitchenCleaned){
             resolve("you cleaned the kitchen 🧹");
        }
        else{
          reject("You didn't cleaned the kitchen");
        }
       }, 2500);
    });
}
function takeOutTrash() {
    return new Promise((resolve , reject) => {
       setTimeout(() => {
        const trashTakenOut = false;
        if(trashTakenOut){
           resolve("you clean the Trash 🚮");
        }
        else{
          reject("You didn't take out the trash");
        }
   
    
  }, 500);
    });
}
// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("You finished all the chores"));
     
//     });
//   });

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value =>{console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("you have finished all the tasks")})
        .catch(error => console.error(error));