// Everything in JavaScript is an object.
var a = {};
var b = function(){ };
var c = [];

// Reflex
console.log("---------------Reflex--------------");
var person = {
	firstname: "Default",
	lastname: "Default",
	getFullName: function(){
		return this.firstname + ' ' + this.lastname;
	}
}

var john = {
	firstname: 'John',
	lastname: 'Doe'
}

// never do this in real life
john.__proto__ = person;
console.log(john.getFullName());

var jane = {
	firstname: 'Jane'
}

// never do this in real life
jane.__proto__ = person;
console.log(jane.getFullName());

for (var prop in john){
	
	if (john.hasOwnProperty(prop)){
		console.log(prop + ' : ' + john[prop]);
	}

}


console.log("---------------Extend--------------");

var abu = {
	firstname: 'Abu',
	lastname: 'Mia'
}

// don't do this in real life
abu.__proto__ = person;

var babu = {
	address: '111 Sadar Road',
	getFormalFullName: function(){
		return this.lastname + ' ' + this.firstname;
	}
}

var labu = {
	getFirstName: function(){
		return this.firstname;
	}
}

_.extend(abu, babu, labu); // underscore's extend method
console.log(abu);