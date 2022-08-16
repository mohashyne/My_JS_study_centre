//Mouse Event
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent)
// DoubleClick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent); //hold
//  Mouseup
// clearBtn.addEventListener('mouseup', runEvent); //once released event logs
// Mouseenter
// card.addEventListener('mouseenter', runEvent); // enter btn
// Mouseleave
// card.addEventListener('mouseleave', runEvent); // leave the btn
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
//  card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent); //mostly used for game and things that are highly interactive




// Event Handler
function runEvent(e){
   console.log(`EVENT TYPE: ${e.type}`);

   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

   clearBtn.style.color = 'blue';

   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

}