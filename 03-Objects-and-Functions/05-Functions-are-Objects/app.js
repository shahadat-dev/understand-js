/*

In Javascript Functions Are Objects. 

First class functions:
----------------------
Everything you can do with other types, you can do with Functions.
(Assign them to variables, pass them around, create them on the fly.)

*/


function greet(){
	console.log('hi');
}

greet.language = "Bangla";

console.log(greet);
console.log(greet.a);


/*
Output:

ƒ greet(){
	console.log('hi');
}

Bangla

*/