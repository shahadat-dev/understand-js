var arr = [1,2,3];
console.log(arr); // [1, 2, 3]

function mapForEach(arr, fn){

	var newArr = [];

	for(var i=0; i<arr.length; i++){
		newArr.push(
			fn(arr[i])
		);
	}

	return newArr;

}

var arr2 = mapForEach(arr, function(item){
	return item*2;
});
console.log(arr2); // [2, 4, 6]


var arr3 = mapForEach(arr, function(item){
	return item > 1;
});
console.log(arr3); // [false, true, true]

var checkPastLimit = function(limiter, item){
	return item > limiter;
}

var arr4 = mapForEach(arr, checkPastLimit.bind(this,2));

console.log(arr4); // [false, false, true]


var checkPastLimitSimplified = function(limiter){
	return function(limiter,item){
		return item > limiter;
	}.bind(this,limiter);
};

var arr5 = mapForEach(arr, checkPastLimitSimplified(1));
console.log(arr5); // [false, true, true]

/*

Output:

app.js:2 (3) [1, 2, 3]
app.js:21 (3) [2, 4, 6]
app.js:27 (3) [false, true, true]
app.js:35 (3) [false, false, true]
app.js:45 (3) [false, true, true]

*/
