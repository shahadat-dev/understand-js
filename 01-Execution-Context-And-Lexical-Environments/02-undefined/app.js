var a;
console.log(a); // undefined

if (a === undefined) {
    console.log('a is undefined!');   
}
else {
    console.log('a is defined!');   
}

var b = 10;
console.log(b); // 10

if (b === undefined) {
    console.log('b is undefined!');   
}
else {
    console.log('b is defined!');   
}


var c;
console.log(c); // undefined

var d = "Hello World";
console.log(d); // Hello World

console.log(e); // Uncaught ReferenceError: e is not defined


/* 
Output:

app.js:2 undefined
app.js:5 a is undefined!
app.js:12 10
app.js:18 b is defined!
app.js:23 undefined
app.js:26 Hello World
app.js:28 Uncaught ReferenceError: e is not defined at app.js:28

*/