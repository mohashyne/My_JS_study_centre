//Traversing the DOM: basically meaning moving up and down, will be dealing with parents and children of specific nodes, or whatever we select.

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector(`li.collection-item:first-child`);

val = listItem;
val = list;

//Get child nodes
val = list.childNodes; //the text nodes you get can be line breaks
val = list.childNodes[0]; // will give us the first in the nodeList, not element.
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute ( deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


//instead of using 'childNodes' u can use 'children' depending on what you want to do
//childNodes returns a nodeList while 'children' returns HTMLCollection.

//Get children element nodes.
val = list.children;
val = list.children[1];
list.children[2].textContent = 'You changed me';
//Children of Children
// val = list.children[3].children;
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0]; //to access content of the 3rd child

//First Child
val = list.firstChild; //just like childNodes
val = list.firstElementChild; // to get the element instead of the nodeList

//Last Child
val = list.lastChild; //just like childNodes
val = list.lastElementChild; // to get the element instead of the nodeList

// Count child element
val = list.childElementCount;


//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next Siblings
val = listItem.nextSibling; //get node
val = listItem.nextElementSibling; // to get the element
listItem.nextElementSibling.nextElementSibling.id = 'I-got-changed'
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; //you can go back by using the previous element

//Get Previous Sibling

//Get next Siblings
val = listItem.previousSibling; //get node
// val = listItem.previousElementSibling; // to get the element




console.log(val);