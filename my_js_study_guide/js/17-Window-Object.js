//DOM
//WINDOW METHODS / OBJECTS / PROPERTIES



//Alert
//alert('Hello World'); // it better to use dom for alert , using some nice bootstrap


//PROMPT
//const input =prompt('What is Location');
//alert(input);

//CONFIRM
// if(confirm('Are you sure')){
//     console.log('YES')
// } else {
//     console.log('NO')
// }


let val;

//Outter height and width

val = `${window.outerHeight} ${window.outerWidth}`;


//Inner height and width
val = window.innerHeight;
val = window.innerWidth;


// Scroll points
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; //e.g  if you add ?id=1 to after the hostname, you will get the result of the search in your console.

//Redirect
//window.location.href = 'http://google.com';

//Reload
//window.location.reload();


//History Object

//window.history.go(-3);
val = window.history.length;


//NAVIGATOR OBJECT: it has to do with the actual browser itself, not the window or the environment.

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; // you can create function say if win32 perform this or if macintel perform that.
val = window.navigator.vendor;
val = window.navigator.language; 



console.log(val);