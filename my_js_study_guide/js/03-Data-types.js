//Types of Data stored in a variable
//Primitive and reference data type

//primitive data type: Stored directly in the location the variable accesses stored on the stack. 'Strings , Number, Boolean, Null, Undefined, Symbols(ES6)

//Reference types: are objects accessed by reference , so the data isn't actually stored in the variable. it stored in what is called the 'heap' which has to do with dynamically allocated memory.  'Arrays, Object Literals, functions, Dates, Anything else......'

//The data types are associated with the values not variables
//The same variable can hold multiple types
//we do Not need to specify types
//Most other languages are statically typed(Java, C#, C++)
//There are supersets of JS and addons to allow static typing(TypeScript, flow)


//PRIMITIVE:

//String
const name = 'Muhammad Salihu';
console.log(typeof name);

//Number
const age = 12;
console.log(typeof age);

//Boolean
const IsApproved = true;
console.log(typeof IsApproved);

//Null
const schoolName = null;
console.log(typeof schoolName); // its kind of mistake to get object as the result. it supposed to be null, null has a type-tag of '0' as Object that is why its showing as object.

//Undefined 
let x;    // undefined is declare use 'let' because const must have a value.
console.log(typeof x);


//symbol
const sym = Symbol();
console.log(sym);


//REFERENCE TYPES: - Object

//Array
const hobbies = ['movies', 'sports'];
console.log(typeof hobbies);


//Object Literal
const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(address);


const today = new Date();
console.log(today);
console.log(typeof today);