// SWITCH = can be an efficient replacement to many else if statements

/* let day = 0;

switch(day){
    case 1:
    console.log("It is Sunday");
    break;

     case 2:
    console.log("It is Monday");
    break;

     case 3:
    console.log("It is Tuesday");
    break;

     case 4:
    console.log("It is Wednesday");
    break;

     case 5:
    console.log("It is Thrusday");
    break;

     case 6:
    console.log("It is Friday");
    break;

     case 7:
    console.log("It is Saturday");
    break;

    default:
        console.log("Please enter valid weekday")

} */
let testScore = 70;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A+";
    break;
  case testScore >= 80:
    letterGrade = "A";
    break;
  case testScore >= 70:
    letterGrade = "B+";
    break;
  case testScore >= 60:
    letterGrade = "B";
    break;
  case testScore >= 50:
    letterGrade = "c+";
    break;
    default:
        console.log("plese enter valid percantage");
}
console.log(letterGrade);

