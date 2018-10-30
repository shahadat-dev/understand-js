// by value (primitives)
// creates new copy

var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))
// points to same copy
var c = { greeting: 'hi' };
var d;

d = c;

c.greeting = 'hello' // mutate
// Mutate : To change something
// "Immutable" means it "can't be changed".

console.log(c);
console.log(d);

// by reference (even as parameter)

function changeGreeting(obj){
	obj.greeting = 'Ohe'; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
// creates brand new copy
c = { greeting: 'Howdy' };
console.log(c);
console.log(d);

/*
Output:

app.js:10 2
app.js:11 3
app.js:24 {greeting: "hello"}
app.js:25 {greeting: "hello"}
app.js:34 {greeting: "Ohe"}
app.js:35 {greeting: "Ohe"}
app.js:40 {greeting: "Howdy"}
app.js:41 {greeting: "Ohe"}

*/