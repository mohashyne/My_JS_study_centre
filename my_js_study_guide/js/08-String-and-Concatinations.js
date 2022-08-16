const firstName = 'Muhammad';
const middleName = 'Aminu'
const lastName = 'Salihu';
const age = 55;
const str = 'Hello there my name is Muhammad';
const tags = 'Web design,Web Development,Programming';
const fullName = firstName.concat(' .', middleName[0], '. ', lastName);

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Appending/Add on to a variable
val = 'Hauwa ';
val += 'Muhammad';


val = 'Hello, my name is ' + firstName + ' and i am ' + age;

//Escaping

val = "That's awesome, i can't wait"; // for sentences like this you use double quotes.

//Or use \
val = 'Why is it That\'s awesome, i can\'t wait'; // for sentences like this you use double quotes.

val = firstName.length // we use the length without prentices because it a property and not a method : which are basically functions

//concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];
val = firstName.concat(' .', middleName[0], '. ', lastName);

//IndexOf()
// if this dosen't work try using chartAt
//if you use this and the number u er using is not there , u get -1 by default.
val = firstName.indexOf('1');  
val = firstName.lastIndexOf('1');
//Or use
val = firstName.lastIndexOf('d');

//chartAt()
val = firstName.charAt('2');

//Get last char 
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(2, 5);


//slice()
//will remove the number of character you want to removed from beginning or using negative value
val = firstName.slice(7); 

//split()
//This can split a string into an array using separator.
val = str.split(' ');
val = tags.split(',');

//Replace
val = str.replace('Muhammad', 'Hauwa');
//we want to search for muhammad and replace it with hauwa.


//includes(). to check if it includes and then return a boolean
val = str.includes('Muhammad');
val = str.includes('Hauwa');
val = str.includes('Muhammad' || 'Hauwa');
val = str.includes('Muhammad' && 'Hauwa');
val = fullName.includes('Muhammd' && 'Aminu' && 'Salihu');
console.log(val);