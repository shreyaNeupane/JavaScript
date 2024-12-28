// Aync/Await = Async = makes a function return a promise
//              Await = makes an async function wait for a promise

//              Allows you write asynchronus code in a synchronus manner
//              Aync doesn't have resolve or reject parameter
//              Everything after Await is placed in an event queue



function walkDog(){
    return new Promise((resolve , reject) => {
     setTimeout(() => {
      
      const dogwalked = true;
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
        const trashTakenOut = true;
        if(trashTakenOut){
           resolve("you clean the Trash 🚮");
        }
        else{
          reject("You didn't take out the trash");
        }
   
    
  }, 500);
    });
}
//  await is only valid in async functions
async function dochores() {
    try{
        const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen()
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!")
    }
    catch(error){
        console.error(error);
    }
    
   
}
dochores()