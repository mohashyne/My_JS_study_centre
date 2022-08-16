//TYPE COERSION : the process of changing one-type and changing it to another, but Javascript dose it automatically.

//const val1 = 5;
const val1 = String(5); //the javascript engine will see that we have two value and want to add them together, one is a string and one is a number , and it too it upon itself change one to a string and the concatenate it
const val2 = 6;

const sum = val1 + val2


console.log(typeof sum);
console.log(sum);


// if we want the 56 to be a number we can to this below:

const val3 = String(7);
const val4 = 8;

const sum2 = Number(val3 + val4)


console.log(typeof sum2);
console.log(sum2);