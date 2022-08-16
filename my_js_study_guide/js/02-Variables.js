//var , let , const


// var name = 'Muhammd Salihu';
// console.log(name);

// //re-assigning variables
// name = 'Salihu Muhammd';
// console.log(name);

// //init var (mean initialize)
// //one of the reasons we initialize variables is to use them in a function.

// var greetings;
// console.log(greetings);
// greetings = 'Hello';
// console.log(greetings);

// //variables can include: letters, numbers, _, $ 
// //they can NOT start with a number.


// //Multi word vars
// var firstName = 'Muhammad';  // Camel case
// var first_name = 'Hauwa';  // Underscore
// var FirstName = 'Afra'     // Pascal case :recommended in object oriented prog. when u create class with ES6 classes.
// var firstname;

// let name = 'Muhammd Salihu';
// console.log(name);

// //re-assigning variables
// name = 'Salihu Muhammd';
// console.log(name);



//const can not be changed

// const name = 'Muhammd Salihu';
// console.log(name);

// //u Cannot re-assigning variables
// name = 'Salihu Muhammd';
// console.log(name);

// const greetings; //you must assign a value in terms of const

const person = {
    name: 'Muhammad',
    age:30
} // we can change the properties of person( the data inside the object) , but we cannot re-assign person.

person.name = 'Musa';
console.log(person);


const numbers = [1,2,3,4,5];

numbers.push(6);

console.log(numbers);

//ALWAYS USE CONST EXCEPT IF YOU KNOW I WANT TO CHANCE THE VALUE IN THE FUTURE.  LET MAY BE USE TO LOOP OR ITERATE.