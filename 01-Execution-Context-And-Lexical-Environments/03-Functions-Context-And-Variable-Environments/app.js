function b(){
	var myVar;
	console.log(myVar);
}

function a(){
	b();
	var myVar = 2;
	console.log(myVar);
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);


/* 
Output:

1
undefined
2
1

*/
