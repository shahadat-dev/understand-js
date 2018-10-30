/*

Dynamic Typing: 
---------------
You don't need to the engine what type data a variable holds,
It figures out while your code is running.

Variable can holds different type of values becuase it's all figure 
out during execution.

Example:
Static Typing:

bool isNew = 'Hello'; // an error

Dynamic Typing:

var isNew = true; // no errors

isNew = 'Hi';

isNew = 1; 

So, Javascript is dynamically typed. It figures out on the fly.


*/

/*

Primitive Type:
---------------
A type of data that represents a single value.

That is, not an object.

6 type of primitive value:

1. undefined (represents lack of existence, you shouldn't set a variable to undefined.) 
2. NULL (also represents lact of existence, but you can set a variable to NULL)
3. BOOLEAN (true/false)
4. NUMBER (Floating point numbers, there's always some decimals. Unlike other programming language, there's only one 'number' type.)
5. STRING (a sequence of characters, both '' and "" can be used.)
6. SYMBOL (used in ES6)


*/

/*

Operator:
---------
An operator is a special function that syntactically(written) differently.

Generally, operators take two parameters and return one result.  

*/
console.log('------- Operator -------');
var a = 3 + 4;
console.log(a); // 7

/*
actually it performs like this,

function +(a,b){
	return // add two numbers
}

Like other programming languages, javascript allows to write in
'infix' notation.

infix: 3 + 4
prefix: + 3 4
postfx: 3 4 +


var b = 4 > 3 // true

function >(a, b){
	if a is greater than b then return true; otherwise, return false
}

*/

/*
Operator Precedence:
--------------------
Which operator function gets called first.

Functions are called in order of precedence. (Higher precedence wins).
*/
console.log('------- Operator Precedence -------');

var a = 3 + 4 * 5;
console.log(a); // 23


/*
Associativity:
--------------
What order operator funcions get called in: 
Left-to-Right or Right-to-Left

(When functions have same precedence)

Ex: ( = is Right-to-Left )
a = b = c; // b = c > returns 4
a = 4

*/
console.log('------- Associativity -------');

var a = 2, b = 3, c = 4;

a = b = c;

console.log(a); // 4
console.log(b); // 4
console.log(c); // 4


/*

Coercion:
---------
Converting a value from one type to another type.

(This happens quite often in Javascript because it's dynamically typed.)

*/

console.log('------- Coercion -------');

var a = 'hello' + 'world';
console.log(a); // helloworld

var b = '1' + 2;
console.log(b); // 12

var c = 1 + '2';
console.log(c); // 12


/*
Comparison Operator:

*/

console.log('------- Comparison Operator -------');


console.log(1 < 2 < 3); // true

console.log(3 < 2 < 1); // true
/*

'3 < 2' returns 'false' 
then, 'false < 1' returns 'true'
because, 'false' is coerced to '0'. i.e, '0 < 1' is definitely true

*/


/*

Number(false) ; 0
Number("3") ; 3
Number(undefined) ; NaN
Number(null) ; 0


 
3 == 3 ; true
"3" == 3 ; true
false == 0 ; true
null == 0 ; false (weird part)
"" == false ; true
"" == null ; true
undefined == null ; true

so, there's strictly equality operator '==='

3 === 3 ; true
"3" === "3" ; true
"3" === 3 ; false
0 === false ; false 
undefined == null ; false

*/

/*

Default Values:
---------------

undefined || 'hello' ; hello

null || 'hello' ; hello

'' || 'hello' ; hello

0 || 1 ; 1

0 || 'hello' ; hello

'hi' || 'hello' ; hi

*/

console.log('------- Default Values -------');

function greet(name){
	console.log('Hello ' + name);
}

greet('Shahadat'); // Hello Shahadat
greet(); // Hello undefined

function greetTwo(name){
	name = name || 'Default Name';
	console.log('Hello ' + name);
}

greetTwo('Shahadat'); // Hello Shahadat
greetTwo(); // Hello Default Name



