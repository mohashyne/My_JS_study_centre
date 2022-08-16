//single element selector and multiple element selector.

//Single element selector : will allow you to grab one element by its id or class , it only stores one thing, if you grab a class that appear more than once in a DOM  it will only grab the first one.


//multiple element selector: will actually grab all the elements with that class, and then return an HTML collection, node list depending on which selector you use.

// //Single
// //document.getElementById()
// console.log(document.getElementById('task-title'))

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// //Change styling(but normally we don't use this for styling, use css)
// //most to show something or disappear (make it dynamic)
// document.getElementById('task-title').style.background = 'green';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.borderRadius = '20px';
// //document.getElementById('task-title').style.display = 'none';

// //Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerHTML = '<span style="color:red;">My Task List</span>'


//THE BEST WAY OF DOING IT IS BELOW

// const taskTitle = document.getElementById('task-title');

// //Change styling(but normally we don't use this for styling, use css)
// //most to show something or disappear (make it dynamic)
// taskTitle.style.background = 'green';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// taskTitle.style.borderRadius = '20px';
// //document.getElementById('task-title').style.display = 'none';

// //Change content
// taskTitle.textContent = 'Task List';
// taskTitle.textContent = 'Task List';
// taskTitle.innerHTML = '<span style="color:red;">My Task List</span>'


//document.querySelector()
//IT IS MUCH MORE POWERFUL BECAUSE WE DON"T NEED TO SELECT THINGS  BY ID, WE CAN SELECT ANYTHING. BASICALLY LIKE JQUERY.

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); // if their is more that one it will only get the first one.
console.log(document.querySelector('script')); // if their is more that one it will only get the first one.

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'You just changed me';
document.querySelector('li:nth-child(odd)').style.background = 'Purple'; //only one will be selected because its a single selector