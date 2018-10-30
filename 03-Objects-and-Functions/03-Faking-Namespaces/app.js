/*

Namespace:
----------
A container for variables and functions. 
(Typically to keep variables and functions with the same name seperate)

*/

var greet = "Hello!";
var greet = "Ohe!";

console.log(greet);

// creating objects is used as fake namespace
var english = {};
var bengali = {};

english.greet = "Hello!"
bengali.greet = "Ohe!"

console.log(english.greet)
console.log(bengali.greet);

/*
english.greetings.greet = "Hello"; // var undefined.greet = "Hello"
//app.js:10 Uncaught TypeError: Cannot set property 'greet' of undefined

------So do as following:-------
english.greetings = {}
english.greetings.greet = "Hello"

------Or you can do as below:-------
english = {
	greetings:{
		basic: "Hello"
	}
};
*/


/*
Output:

app.js:13 Ohe!
app.js:22 Hello!
app.js:23 Ohe!

*/
