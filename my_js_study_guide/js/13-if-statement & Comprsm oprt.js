//Control structure. 'if' statement and comparison operators.

// if(something){
//     do something
// } else {
//     do something else
// }

const id = '100';

// EQUAL TO (loose , just testing the value not the type)
// if(id == 100){
//     console.log("CORRECT");
// } else {
//     console.log('INCORRECT');
// }

// //NOT EQUAL TO
// if(id != 101){
//     console.log("CORRECT");
// } else {
//     console.log('INCORRECT');
// }


// //EQUAL TO VALUE AND TYPE (STRICT)
// //MOST RECOMMEND

// if(id === 100){
//     console.log("CORRECT");
// } else {
//     console.log('INCORRECT');
// }


// //NOT EQUAL TO (strict)
// if(id !== '100'){
//     console.log("CORRECT");
// } else {
//     console.log('INCORRECT');
// }

//this only works if the value is defined, if you try this function with an undefine value, you will get an error
// if(id){
//     console.log(`The ID is ${id}`) // use back ticks
// } else {
//     console.log('NO ID')
// }

// //const ids = '500, 700'
// //if u want to test if something is undefined, use this function
// if(typeof ids !== 'undefined'){
//     console.log(`The ID is ${id}`) // use back ticks
// } else {
//     console.log('NO ID')
// }


//GREATER OR LESS THAN
// if(id <= 200){
//     console.log("CORRECT");
// } else {
//     console.log('INCORRECT');
// }


//IF ELSE
const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
// }  else{
//     console.log('Color is not red or blue');
// }


//LOGICAL OPERATORS: if we one to test moore than one thing we can use this operator.

const name = 'Muhammad'
const age = 25;

//AND &&
if(age > 0 && age < 12){
 console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is an teenager`);
} else{
    console.log(`${name} is an Adult`);
}

//OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else{ 
   console.log(`${name} is registered for the race`)
}

//TERNARY OPERATOR/ SHORTHAND

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//this is shorter than write an if-else statements. BUT nOT in all if-else statement.

//the if statement will work without the braces but are recommended.

//without Braces
if(id === 100)
   console.log('CORRECT');
 else
 console.log('INCORRECT');  