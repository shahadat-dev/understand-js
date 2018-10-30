(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// console.log("a: ", a);
console.log("b: ", b);

c = 10;

console.log(c);
console.log("c defined? " + (typeof c !== 'undefined'));

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

/* Output: 

a defined? false
toptal.js:6 b defined? true
toptal.js:9 b:  3
toptal.js:13 10
toptal.js:14 c defined? true
toptal.js:16 0.30000000000000004
toptal.js:17 false
toptal.js:22 true

*/