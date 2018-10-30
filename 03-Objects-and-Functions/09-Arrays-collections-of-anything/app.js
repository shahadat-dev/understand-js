var arr = [
	1,
	false,
	{
		name: 'Shahadat',
		address: 'Rajshahi,BD'
	},
	function(name){
		var greeting = 'Hello ';
		console.log(greeting + name);
	},
	"hello"
];

console.log(arr);
arr[3](arr[2].name);

/*

Output:

[1, false, {…}, ƒ, "hello"]
Hello Shahadat

*/