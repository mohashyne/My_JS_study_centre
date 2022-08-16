// ........... Set Local Storage Item.............
// localStorage.setItem('name', 'Muhammad');
// localStorage.setItem('age', '55');


// ........... Set Session Storage Item.............
// sessionStorage.setItem('name', 'Salihu');

//....... Remove from Storage........
// localStorage.removeItem('name');


//..... Get from Storage........
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// 
//....Clear local Storage
// localStorage.clear();  // comment the 'localStorage.setItem' value to clear
// console.log(name, age);

//.... To add a task to local storage......
document.querySelector('form').addEventListener('submit',
function(e){
    // console.log(123); //testing the log
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
           tasks = [];
    }else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');

      e.preventDefault();
});

// to loop through it outside
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})