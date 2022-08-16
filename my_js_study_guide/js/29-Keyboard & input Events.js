// ..............Keyboard & input Events.................
// const form = document.querySelector('form'); // if you have a big project you will like to select by id or class.
// const taskInput = document.getElementById('task');

// form.addEventListener('submit', runEvent);

// .............Clear input.................
// taskInput.value = ''; //to set the default value to nothing, if it has been assigned on the form. this is usually what we want after submitting a form.

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//    Get input value
//     console.log(taskInput.value);

//    to prevent that
// e.preventDefault(); // usually if do a submit you will like to do this
// } // the default behavior is to flash the event and redirect to the action set on the html. set action the html action="index.php".



// SOME EVENT WE CAN RUN ON THE ACTUAL INPUT NOT THE FORM
const form = document.querySelector('form'); 
const taskInput = document.getElementById('task');
 //to make the e.target visible on the screen
 const heading = document.querySelector('h5');
 const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// ..........Keydown............
// taskInput.addEventListener('keydown', runEvent);
// ..............Keyup.................
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent); // when you click inside the input.
// blur
// taskInput.addEventListener('blur', runEvent); // when you click outside the input.
// Cut
// taskInput.addEventListener('cut', runEvent);
// Copy
// taskInput.addEventListener('copy', runEvent);
// Select
// taskInput.addEventListener('select', runEvent);
// paste
// taskInput.addEventListener('paste', runEvent);
// input
// taskInput.addEventListener('input', runEvent); // any event will be an input.
// change
select.addEventListener('change', runEvent); // any event will be an input.



function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value); //to get the value of the event

    //to make the e.target visible on the screen
    // heading.innerText = e.target.value;
    

}