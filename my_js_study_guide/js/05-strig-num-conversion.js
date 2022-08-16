//String to Numbers
let val;

val = '5';
val = Number('5');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());
console.log(val.toFixed(3)); //toFixed allow us to add decimals numbers




//Boolean
val = Number(true);

console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(false);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//Null to number
val = Number(null);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number('hello');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());


//Array to Number

val = Number([1,2,3]);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());


//parseInt
val = parseInt('1000');

console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//parseFloat
val = parseFloat('1000.31');

console.log(val);
console.log(typeof val);
console.log(val.toFixed()); // you can add number of decimal to shown in case 0f .30 to avoid the removal of 0.

