// using a function statement
function greet(name){
	console.log('Hello ' + name);
}
greet('Shahadat'); // Hello Shahadat

//using a function expression
var greetFunc = function(name){
	console.log('Hello ' + name);
};
greetFunc('Shahadat'); // Hello Shahadat

// using immediately invoked function expressions (IIFEs)
var greeting = function(name){
	return 'Hello ' + name;
}('Shahadat');

console.log(greeting); // Hello Shahadat

// classic exapmle of immediately invoked function expressions (IIFEs)
(function(name){
	var greeting = 'Classic Hello '
	console.log(greeting + ' ' + name)
}('Shahadat')); // Hello Shahadat

console.log('----------------safe-code-----------------');

// safe-code
// IIFE uses its own execution context. so it doesn't collide any other
// environent (ex. global or other)
var myGreeting = 'Ohe';

(function(name){
	var myGreeting = 'Hello'
	console.log(myGreeting); // Hello
}());

console.log(myGreeting); // Ohe

// but if you want intentionally access of other object, you can pass it as parameter
(function(global) {
	global.myGreeting = "Hello";

}(window)); // in Nodejs it will be 'process' global object

console.log(myGreeting); // Hello


/*
Output:

app.js:3 Hello Shahadat
app.js:9 Hello Shahadat
app.js:18 Hello Shahadat
app.js:26 ----------------safe-code-----------------
app.js:35 Hello
app.js:38 Ohe
app.js:46 Hello

*/