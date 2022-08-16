//QuerySelectorAll which is much more like the previous ones, except it returns what is called the nodeList: A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes). HTMLCollection items can be accessed by their name, id, or index number. NodeList items can only be accessed by their index number. An HTMLCollection is always a live collection.

// What is the difference between array and NodeList?
// an array discussion: a NodeList is a collection of nodes that can be used to access and manipulate DOM elements, while an array is a JavaScript object which can hold more than one value at a time. Both NodeLists and arrays have their own prototypes, methods, and properties.

//IT ALLOWS US TO DO OTHER ARRAY METHODS WITHOUT CONVERTING THEM.

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent =` ${index} All changed`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

//Odd
liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});

// //Even
// liEven.forEach(function(li, index){
//     li.style.background = '#ccc';
// });

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'green';
}

console.log(items);