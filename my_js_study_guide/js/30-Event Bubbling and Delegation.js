// Event Bubbling and Delegation

//Event Bubbling: is the bubbling of events through the DOM. Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object (Provided the handler is initialized). The bubbling principle is simple.
// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. 


// Event delegation
// Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor. MOSTLY we put the event on the 'PARENT' then we target the item we want under it.

// In the handler we get event.target to see where the event actually happened and handle it.



//..................Event Bubbling...............

// document.querySelector('.card-title').addEventListener('click',
//  function(){
//       console.log('card title');
// });


// document.querySelector('.card-content').addEventListener('click',
//  function(){
//       console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
//  function(){
//       console.log('card');
// });


// document.querySelector('.col').addEventListener('click',
//  function(){
//       console.log('col');
// });   //----it will bubble up  even if you didn't call the rest




//.........what happens without Delegation........
/* const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

function deleteItem(){
    console.log('delete item');
} */   
//only the first item will be affect and the rest will not function unless u delegate.  IF add any item using javascript also , you need to delegate before it works.


// ...............Event Delegation.....................
//e.g putting the event parent and going down. the parent could be anything 'body' , html or div
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains ('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
} 