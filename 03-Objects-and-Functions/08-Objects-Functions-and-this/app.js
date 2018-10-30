//Everytime a function is executed, a special 'this' variable is created,
// with a Variable Environment and Outer (Lexical) Environment

function a(){
	console.log(this); // window or global object ('process' for Node.js)
	this.newvariable = 'hello';
}
a();
console.log(newvariable); // hello

var b = function(){
	console.log(this); // window or global object
}
b();

/*
Output:

app.js:5 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
app.js:9 hello
app.js:12 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

*/

var c = {
	name: 'This is c object',
	log: function(){
		this.name = 'Updated c object.'
		console.log(this); // c object | name: 'Updated c object'
		
		// inner function's 'this' points to global/window object
		var setname = function(newname){
			this.name = newname;
			console.log(this); // window or global
		}
		setname('Updated again! The c object.')
		console.log(this); // c object
		console.log(window.name); // Updated again! The c object.
	}
}

c.log();

/*
Output:

app.js:29 {name: "Updated c object.", log: ƒ}
app.js:34 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
app.js:37 {name: "Updated c object.", log: ƒ}
app.js:38 Updated again! The c object.

*/

var d = {
	name: 'This is d object',
	log: function(){
		// as we know objects work by reference,
		// so we can copy this(d object) into self
		// now we have no headache which 'this' points to
		var self = this; 

		self.name = 'Updated d object.'
		console.log(self); // d object | name: 'Updated d object.'
		
		var setname = function(newname){
			self.name = newname;
		}
		setname('Updated again! The d object.')
		console.log(self); // d object
		
	}
}

d.log();

/*
Output:

app.js:63 {name: "Updated d object.", log: ƒ}
app.js:69 {name: "Updated again! The d object.", log: ƒ}

*/
