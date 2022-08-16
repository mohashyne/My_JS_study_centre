//single element selector and multiple element selector.

//Single element selector : will allow you to grab one element by its id or class , it only stores one thing, if you grab a class that appear more than once in a DOM  it will only grab the first one. e.g
// //document.getElementById()
////THE BEST WAY OF DOING IT IS BELOW

// const taskTitle = document.getElementById('task-title');


//multiple element selector: will actually grab all the elements with that class, and then return an HTML collection, node list depending on which selector you use.

// //MULTIPLE SELECTOR (SIMILAR TO ARRAYS WITH LIMITATION)
// //document.getElementsByClassName

// //Global scope, it will get all the class
// const items = document.getElementsByClassName('collection-item'); 
// console.log(items);
// console.log(items[0]);
// items[3].style.color = 'red';
// items[2].textContent = 'You changed me'; 

// //in scope.
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); 



//document.getElementsByTagName
let lis = document.getElementsByTagName('li'); //to convert to array ,change const to let
console.log(lis);
console.log(lis[4]);
lis[2].style.color = 'green';
lis[1].textContent = 'You changed me again'; 


//convert HTML collection into an array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
    console.log(li.className)
    li.textContent =` ${index} All changed` // to change all li
});

console.log(lis);



