const color = 'green';

switch(color){
     case 'red':
     console.log('Color is red');
     break;
     case 'blue':
     console.log('Color is blue');
     break;
     default:
     console.log('color is not red or blue');
     break;
}

//RECOMMENDED TO USE SWITCHES IF YOU HAVE A LOT OF DIFFERENT CASES INSTEAD OF USING THE IF-ELSE
let day;


switch(new Date().getDay()){
case 0:
    day = 'sunday';
    break;    
case 1:
    day = 'Monday';
    break;    
case 2:
    day = 'Tuesday';
    break;    
case 3:
    day = 'Wednesday';
    break;    
case 4:
    day = 'Thursday';
    break;    
case 5:
    day = 'Friday';
    break;    
case 6:
    day = 'Saturday';
    break;    
}

console.log(`Today is ${day}`);