/*
While anonymous function, inside of setTiemout(), invoked;
sayHiLater() finished up and poped out from execution
stack. But still it has access to 'greeting' variable
because of closure.
*/

function sayHiLater(){

	var greeting = 'Hi!';

	setTimeout(function() {

		console.log(greeting);
		
	}, 3000);

}

sayHiLater();

function tellMeWhenDone(callback){

	// do something
	var a = 100; // some work
	var b = 200; // some work
	callback();

}

tellMeWhenDone(function() {

	console.log("I'am done.");

});

tellMeWhenDone(function() {

	console.log('All done.');

});

function grandPa(cb, a, b, c){

	console.log('------Start grandPa------');
	cb(a,b,c);
	console.log('------Exit grandPa------');

}

function parent(cb, a, b){

	console.log('------Start parent------');
	var dada = "Abul Kashem";
	grandPa(cb,a,b,dada);
	console.log('------Exit parent------');

}

function child(cb, a){
	
	console.log('------Start child------');
	var baba = 'Nizam Uddin';
	parent(cb, a, baba);	
	console.log('------Exit child------');

}

var me = 'Shahadat Hossain';

child(function(x,y,z) {

	console.log('------ Start anonymous executing now -------');
	console.log('Name: ' + x);
	console.log('Father: ' + y);
	console.log('Grand Father: ' + z);
	console.log('------ End anonymous -------');

}, me);

/*
Output:

app.js:33 I'am done.
app.js:39 All done.
app.js:62 ------Start child------
app.js:53 ------Start parent------
app.js:45 ------Start grandPa------
app.js:73 ------ Start anonymous executing now -------
app.js:74 Name: Shahadat Hossain
app.js:75 Father: Nizam Uddin
app.js:76 Grand Father: Abul Kashem
app.js:77 ------ End anonymous -------
app.js:47 ------Exit grandPa------
app.js:56 ------Exit parent------
app.js:65 ------Exit child------
app.js:14 Hi!

*/