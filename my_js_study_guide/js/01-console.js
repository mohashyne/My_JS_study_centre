
//in the console to change color document.querySelector('h1').style.color = 'red';

//Log console


console.log('Hello world');
console.log(123);
console.log(true);
let greetings  = 'Hello';
console.log(greetings);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.warn('This is warning');

//it wil output time spent to run from the first hello world to the last one. 
console.time('Hello Timer');
console.log('Hello world');
console.log('Hello world');
console.log('Hello world');
console.log('Hello world');
console.log('Hello world');
console.timeEnd('Hello Timer');

//console.clear();g