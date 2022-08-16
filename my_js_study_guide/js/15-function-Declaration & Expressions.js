function greet(firstName = 'Muhammad', lastName = 'Salihu'){
    //  if(typeof firstName === 'undefined'){firstName = 'Muhammad'}
    //  if(typeof lastName === 'undefined')[lastName ='Salihu' ]  
    //  console.log('Hello'); //[ES5 method of setting default values ]
        return 'Hello ' + firstName + ' ' + lastName ;
    }
    
    //console.log(greet())
    
    
    //FUNCTION EXPRESSION : basically its putting a function as a variable, it can be anonymous , usually they are anonymous.
    // const = function square(){
    
    // }
    
    
      //OR
     
    const square = function(x){
        return x*x;
    
    }; //; is used because its a variable
    
    //console.log(square(8));
    
    
    //you can put function(x = 3) as default, and if you don't pass any value in the console it will give you the square of the default value.
    
    
    //IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
    
    //IIFEs is  a function you declare and run at the same time.
    
    (function(){
        console.log('IIFE Ran..');
    })();
    
    //if we run a function they must always end with prentices
    
    (function(name){
        console.log('Hello '+ name);
    })('Muhammad');   //this is useful when you come to certain design patterns like the modules patterns.
    
    //PROPERTY METHODS
    
    const todo = {
        add: function(){
            console.log('Add todo...');
        },
        edit: function(id){
            console.log(`edit todo ${id}`);
        }
    
    }
    
    todo.delete =function(){
        console.log('delete todo...');
    }
    
    todo.add();
    todo.edit(22);
    todo.delete();
    