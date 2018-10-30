/*
Closure:
--------
when sayHi function is invoked, then execution of greet function 
is already done and poped from execution stack. so it shouldn't get 
'whattosay' variable. but it gets. the 'whattosay' variable remains 
in memory still and a reference exists to point it; because it's in 
outer environment of sayHi(). This is closure in JS. It's very special and powerfull 
feature of JS. (See Fig: 09-Closure-part-01 and 10-Closure-part-02)

*/

function greet(whattosay){

	return function(name){
		console.log(whattosay + ' ' + name);
	}

}

var sayHi = greet('Hi');
sayHi('Shahadat');

/*
Output:

Hi Shahadat

*/

console.log('----------------------------------------------');

function foo1(){

	var arr = [];

	for(var i = 0; i < 3; i++){
		
		arr.push(
			function(){
				console.log(i);
			}
		);

	}

	return arr;

}

var fs = foo1();
fs[0]();
fs[1]();
fs[2]();
console.log('*************');

/*

when we invoke these three functions, foo1() is finished then. 

but 'i' remains in memory and it's value is 3

(See Fig: 11-Closure-again-part-01, 12-Closure-again-part-02,
          13-Closure-again-part-03 and 14-Closure-again-part-04 )

Output:

3
3
3

*/

function foo2(){

	var arr = [];

	for(var i = 0; i < 3; i++){
		
		var temp = i;

		arr.push(
			function(){
				console.log(temp);
			}
		);

	}

	return arr;

}

var fs2 = foo2();
fs2[0]();
fs2[1]();
fs2[2]();


// if we use temporary varible using 'var' keyword, nothing changed unless it's value '2' now
// so what's the solution?

/*
Output:

2
2
2

*/
console.log('******* using let *******');

function foo3(){

	var arr = [];

	for(var i = 0; i < 3; i++){
		
		let temp = i; // using 'let'; block scope

		arr.push(
			function(){
				console.log(temp);
			}
		);

	}

	return arr;

}

var fs3 = foo3();
fs3[0]();
fs3[1]();
fs3[2]();


/*

in es6 it's solved using 'let', because 'let' has less scope and 
execution context which works in 'if' statement. for loop will create
three different 'temp' variable. but it will not work in earlier 
version of EcmaScript.

Output:

0
1
2

*/

// so it's the solution for earlier versions; using closure and IIFEs
console.log('******* using closure and IIFEs *******');

function foo4(){

	var arr = [];

	for(var i = 0; i < 3; i++){
		
		arr.push(
			(function(j){
				return function(){
					console.log(j);
				}
			}(i))
		);

	}

	return arr;

}

var fs4 = foo4();
fs4[0]();
fs4[1]();
fs4[2]();

/*
using IIFE we can create different execution context using IIFEs. here we're creating three
different executing context within for loop. so three different 'closure' / 'j' will 
create in three different execution context.

IIFEs should return something to store in the array. 
we can return value, function or anything. we're returning anonymous function here.


Output:

0
1
2

*/