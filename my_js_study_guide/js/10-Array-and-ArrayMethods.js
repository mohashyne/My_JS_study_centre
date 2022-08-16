//creating arrays and mutating them with some helpful methods.

const numbers = [43,53,33,23,44,36,5];

            //OR
const numbers2 = new Array(22,44,68,92,7,8); 

const fruits = ['Apple', 'Orange', 'Banana', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

//console.log(mixed);
//console.table(mixed[5]);

let val;

//Get array length
val = numbers.length;

//Check if is array
val = Array.isArray(numbers);
val = Array.isArray('Hello');

//Get Single Value
val = numbers[3];

//Insert to array
numbers[2] = 999;

//Find the index of a value
val = numbers.indexOf(44);

// //Mutating ARRAYS, with diff methods
// //Add on to end
// numbers.push(88 ,'girls');

// //Add on to end
// numbers.unshift(99, 'boys');


// //Take off from end
// numbers.pop();


// //Take off from front
// numbers.shift();

// //splice value from Specific arrays
// //numbers.splice(-6);
// numbers.splice(1,2);

// //Reverse
// numbers.reverse();     //COMMENTED OUT TO AVOID CONFLICT WITH CONCATENATING ARRAYS

//Concatenate arrays
//val = numbers.concat(numbers2);
//val = numbers.concat(numbers);

// //Sorting
// val = fruits.sort();
// val = numbers.sort();

// //Using "Compare function" to sort numbers
// val = numbers.sort(function(x, y){
//     return x - y;

// });

// //Reverse Sort
// //return y - x instead of x - y
// val = numbers.sort(function(x, y){
//     return y - x;

// });   

         //COMMENTED OUT TO AVOID CONFLICT WITH FIND


// Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50)

//Programmatically remove from an array
//TODO (filter)

console.log(numbers);
console.log(val);