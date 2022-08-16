const name = 'Muhammad';
const age = 45;
const job = 'Web Developer';
const city = 'Miami';
const zip = 88997;
let html;


// Without template strings (ES5)/ this the old way of doing things
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age +'</li> <li>Job: ' + job +' </li> <li>City: ' + city +' </li></ul>';

html = '<ul>' +
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age +'</li>'  +
'<li>Job: ' + job +' </li>' +
'<li>City: ' + city +' </li>'+
'</ul>';

//function
function greetings() {
    return 'hello';
}

//With template strings (ES6)/ we use back ticks ``
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age} </li>
<li>Job: ${job} </li>
<li>City: ${city} </li>
<li>Zip: ${zip} </li>
<li>2 + 2 = ${2 +2}</li>
<li>${3 * 5}</li>
<li>${6 - 3}</li>
<li>${greetings()}</li>
<li>${age > 30 ? 'Over aged' : 'You are qualified'}
<li>${age > 30 || job === 'Web Developer' ? 'You are qualified' : 'You are Dis-qualified'}
</ul>
`;


document.body.innerHTML = html;