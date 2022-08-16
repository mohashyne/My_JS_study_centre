// for(let i = 0; i < 10; i++){
//     console.log('Number '+ i);

 
// }

/* for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number')
        continue; // if you use continue, 2 will not show twice.

    }


    console.log('Number '+ i);

 
}

for(let d = 0; d < 20; d++){
    if(d % 2 === 0){
        console.log('I love even number ', d);
        continue;
    }
    if(d === 17){
        console.log('Stop the loop');
        break;
    }

    console.log(d +' is an odd numbers');

} */

//WHILE LOOP
//we set the variable outside the loop

/* let i = 0;

while(i < 10){
    console.log('Number ' + i);
    i++;

} */

//DO-WHILE LOOP
//It runs is always going to run at least once though matter what. it must give you a reason for the output, whether the condition is met or not. 

/* let i = 100;

do{
    console.log('Number ' + i);
    i++; 
}
while(i < 10); */


//HOW TO LOOP THROUGH ARRAYS

let cars = ['BMW', 'MERCEDES', 'FORD', 'TOYOTA', 'HONDA']

/* for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
} */


//FOR EACH: it better and cleaner if you want to loop through and array.
//the function can take in 3 diff things, iterator , index  and the actual array
// cars.forEach(function(car){
//   console.log(car + ' is one of my best cars.')
// })

 /*cars.forEach(function(car, index, array){
       console.log(`${index} : ${car} is one of my best cars.`);
       console.log(array);
    }) */


//MAP : basically used to return something diff for an array

const users = [
    {id:1, name:'Muhammad'},
    {id:2, name:'Daula'},
    {id:3, name:'Hauwa'},
    {id:4, name:'Afra'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

const assignedUser = users.map(function(selectedUser){
    return `${selectedUser.name} ${selectedUser.id}`;

    

})

console.log(assignedUser);



//FOR-IN

const user = {
    firstName: 'Muhammad',
    lastName: 'Salihu',
    age: 25
}

for(let x in user){
    console.log(x, user[x]);
         
    //or

console.log(`${x} : ${user[x]}`)

}