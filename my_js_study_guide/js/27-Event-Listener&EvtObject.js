// Event Listener & Event Object

// document.querySelector('.clear-tasks').addEventListener('click',
// function(){
//  console.log('He Clicked me') 
// if you clicked by default some link try to redirect, that why you see the flash if its not defined '#'. but if you define it with a website or another link it will flash and redirect.

// });

// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//  console.log('He Clicked me') 
 

//  To stop the default behavior, we will pass parameter as the event object e.g 'e'
//  e.preventDefault();
// });

// Having a named function below is better.
document.querySelector('.clear-tasks').addEventListener('click', onClick); //u can also use 'mouseover' and view the type.

function onClick(e){
    // console.log('Clicked')

    let val;

    val = e;

    // Event Target Element
    val = e.target;  //click to get the result on console
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    
    e.target.innerText = 'Added';

    //Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    //Co-ordinate event relative to the window
    //window
    val = e.clientY; //number of pixels from the y-axis if you click the btn lower click: higher pixel/Higher click :lower pixel
    val = e.clientX; // beginning and end 

    //Button
    val = offSetY;
    val = offSetX



    console.log(val);
}

