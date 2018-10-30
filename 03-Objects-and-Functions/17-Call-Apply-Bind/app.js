/*
bind() creates a copy of function, whatever function is calling and 
binds an object to it, whatever object is passing to it. 
Inside the function, 'this' will point to the passing object.
*/
console.log('---------------------bind()--------------------');

var person = {
	
	firstname: 'Shahadat',
	lastname: 'Hossain',
	
	getFullName: function(){

		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	
	}
}

var logName = function(lang1, lang2){

	console.log('Logged: ' + this.getFullName()); // 'this' ==> points to 'person' object
	console.log('Arguments: ' + lang1 + ' ' + lang2);

}

// var logName(){...}.bind(person); // bind() can be used on the fly

var logPersonName = logName.bind(person, 'bn');

logPersonName('en'); // logPersonName() is a copy of logName(). so we can pass parameter for 'lang1' and 'lang2' arguments

/*
Output:

Logged: Shahadat Hossain
Arguments: bn en

*/

console.log('---------------------call()--------------------');

// invoke a function; others are same as bind(); 
// except that, it doesn't create another copy.

logName.call(person, 'en', 'bn'); 

/*
Output:

Logged: Shahadat Hossain
Arguments: en bn

*/

console.log('---------------------apply()--------------------');

// accepts parameters as an array. 
// this is the only difference between call() and apply().

logName.apply(person, ['en', 'bn']); 

/*
Output:

Logged: Shahadat Hossain
Arguments: en bn

*/

console.log('------------------------------------------------');

// usage of call() / apply()
// function borrowing

var person2 = {
	firstname: 'Nizam',
	lastname: 'Uddin'
};

// 'person2' object has no method; but we can borrow 'getFullName' 
// method from 'person' object as properties' name are same.
console.log(person.getFullName.apply(person2));

// usage of bind()
// function currying (creating copy of a function but with some preset parameters)

function multiply(a, b){
	console.log('args: ' + a + ' ' + b);
	console.log('--------------')
	return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); // set a = 2 permanently
console.log(multiplyByTwo(4)); // 8

var multiplyByThree = multiply.bind(this, 3); // set a = 3 permanently
console.log(multiplyByThree(4)); // 12

// we can use bind() on the function, which is alredy created using bind()
var multiplyByTwoAgain = multiplyByTwo.bind(this, 5); // a is already set to 2; now set b = 5 permanently
console.log(multiplyByTwoAgain()); // 10



