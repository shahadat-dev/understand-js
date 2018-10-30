/*

Expression:
-----------
A unit of code that results in a value.
(It doesn't have to save in a variable)

Ex:
> a = 3; 
< 3 

> 1 + 2;
< 3

*/

greet();

// function statement
function greet(){
	console.log('hi');
}

// Function Expressions aren't hoisted.
//anonymousGreet(); //Uncaught TypeError: anonymousGreet is not a function at app.js:8


// function expression
var anonymousGreet = function(){
	console.log('hi')
}

anonymousGreet();

function log(a){
	console.log(a);
}

// first class function
log(function(){
	console.log('hi')
})

// passing a function to another function and invoke it there.
// functions in JS are objects; so we can use functions as variable.
function logTwo(a) {
	a();
}

logTwo(function(){
	console.log('hi');
})



/*
Output:

app.js:21 hi
app.js:30 hi
app.js:36 ƒ (){
	console.log('hi')
}
app.js:51 hi

*/