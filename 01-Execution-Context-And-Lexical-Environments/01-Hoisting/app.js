/*
Hoisting: 
---------
Before executing code line by line, 
Setup memory space for Variables and Functions at creation phase. 

Function stored at memory entirely.

All variable stored in memory as "undefined" first.

*/

b(); 
console.log(a); 

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

/*

Javascript engine interpret above code like following:

function b() {
    console.log('Called b!');
}

var a;

b();
console.log(a);

a = 'Hello World!';

*/

/* 
Output:

Called b!
undefined

*/