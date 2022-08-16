let val;

val = document;
val = document.all;
val = document.all[5];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//We can select stuffs without using selectors, its not recommended But its possible.

val = document.forms;
val = document.forms[0]; //access the form using its index
val = document.forms[0].id;
val = document.forms[0].method; //get or post
val = document.forms[0].action; //if we have one on the html e.g action="index.php"


val = document.links;
val = document.links[0]; //index
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');
val = document.scripts[2].getAttribute('src');

//Erorr if you try to use foreach on an element without converting them an array.
// let scripts = document.forEach(function(script) {
//     console.log(scripts);
    
// });

//Turning HTML elements into an array, so that you can use things like 'Foreach'
let scripts = document.scripts;

let scriptsArr = Array.from(scripts)

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
        
     });
    

console.log(val);
