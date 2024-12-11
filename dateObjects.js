// Date objects = Objects that contain values that represent dates and times
//                 These date objects can be changed and formatted.

// Date(year , month , day, hour, minute , second ,ms)

// const date = new Date(2024 , 1 , 2,12,0,0);
// const date = new Date("2024-01-02T12:00:00Z");

// const date = new Date(0);
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(date);
// console.log(year);
// console.log(month); // janurary is 0 and december is 11
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(dayOfWeek); // sunday is zero

//----------- SET A DATE ---------------
// const date = new Date();

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(2);

// console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("happy new year");
}