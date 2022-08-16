let val;

const today = new Date();
//const birthday = new Date('07/05/1998 11:25:00');
let birthday = new Date('07/05/1998 11:25:00');
birthday = new Date('September 10 1998');
birthday = new Date('07-05-1998');

val = today;
// val = today.toString(); // if you want to work with strings or change it to string

val = birthday;
val = today.getMonth(); // 0 means jan , 1=feb so bear in mind how javascript dose it indexing
val = today.getDate();
val = today.getDay(); // mon=1 , tue=2, wen-3 ......
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getUTCMilliseconds();
val = today.getTime();

console.log(val);

//Change date or time
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1990);
birthday.setHours(3);
birthday.setMinutes(33);
birthday.setSeconds(22);


console.log(birthday);