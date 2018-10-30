/* 
Each Execution Context has a Reference to it's Outer Lexical Environment
that means, where it physically sits/written.
*/

// b()'s outer lexical environment is Global Execution Context. It's written
// outside any function where a() and myVar also written.
function b(){
	console.log(myVar)
}

function a(){
	b();
	var myVar = 2;
}

var myVar = 1;
a();

/* 
Output:

1

*/

// bar()'s outer referrence(lexical environment) is foo()'s execution context.
function foo(){
	function bar(){
		console.log(myAnotherVar)
	}
	
	var myAnotherVar = 10;
	bar();
}

var myAnotherVar = 20;
foo()

/*
Output:

10

*/

function Foo1(){
	
	Bar1();
	function Bar1(){
		console.log(myOtherVar)
	}
	var myOtherVar = 20;
}

var myOtherVar = 10;
Foo1()

/*
Output:

undefined

*/

// Bar2()'s outer reference is Foo2() and Foo2()'s outer reference is Global
// execution context. myVar2 is found neither at Bar2() first and then Foo2().
// But it's found at global execution environment.
function Foo2(){
	
	function Bar2(){
		console.log(myVar2)
	}
	Bar2();	
}

var myVar2 = 20;
Foo2()

/*
Output:

20

*/

function Foo3(){
	
	function Bar3(){
		console.log(myVar3)
	}
	var myVar3;
	Bar3();	
}

var myVar3 = 10;
Foo3()

/*
Output:

undefined

*/

console.log('---------------------')
var i = 1;
function myFoo(){
	i = 2;
	console.log(i);
}

myFoo();
console.log(i);

/* 
Output:

2
2

*/

// myVar4 found nowhere.
function Foo4(){
	
	function Bar4(){
		
		console.log(myVar4);
	
	}

	Bar4();	
}

Foo4();


/*
Output:

Uncaught ReferenceError: myVar4 is not defined 
	at Bar4 (app.js:103)
    at Foo4 (app.js:106)
    at app.js:109

*/


