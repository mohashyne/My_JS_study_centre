const person = {
    firstName: 'Muhammad',
    lastName: 'Salihu',
    age: 44,
    email: 'alkaline4peace@gmail.com',
    hobbies: ['Soccer', 'Baseball', 'Volleyball'],
    address: {
        city: 'Boston',
        state: 'MA'
    },

    getBirthYear: function(){
        return 2022 - this.age;  // to calculate the year of the age, we use 'this' + the variable to get the year since it , because  age is not define, it is inside an object. current year - age.
    }

}

let val;
 
val = person;

//Get a specific value
val = person['firstName'];
val = person.firstName; // this one is recommended
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

//Arrays of Object

const people = [
    {name: 'Muhammad', age: 44},
    {name: 'Daula', age: 30},
    {name: 'Hauwa', age: 25},
    {name: 'Afra', age: 20}
];

for(let i = 0; i < people.length; i++){

    console.log(people[i].name);
}