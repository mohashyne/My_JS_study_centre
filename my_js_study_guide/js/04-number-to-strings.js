//Type Conversion , for example if you are taking an input from a form and you are putting that into a variable, thats gonna be a string by default, then if you want to apply calculations to it, you will want to pause it and change it into a number type.

let val;

//Convert to String
val = 5;
val = String(5);  // number converted to string
val = String(4+4); // this will overwrite the first one.

//Output
console.log(val);
console.log(typeof val);
console.log(val.length); // this will display undefined unless its a string , because only string length are shown, so we need to change the number to string for it to work


//Convert Boolean to string
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);


//Date to String
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//Array to string
val = String([1,2,3,4]);
console.log(val);
console.log(typeof val);
console.log(val.length);


// toString()
val = (5).toString() //you can use the first one or this one for changing # to string

console.log(val);
console.log(typeof val);
console.log(val.length);



val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);
