var objectLiteral = {
	firstname: "Shahadat",
	isAProgrammer: true
};

console.log(objectLiteral);

// string = JSON.stringify(object)
console.log(JSON.stringify(objectLiteral));

// json = JSON.parse(string)
var jsonValue = JSON.parse('{"firstname":"Shahadat", "isAProgrammer":true}');
console.log(jsonValue)

/*
Output:

app.js:6 {firstname: "Shahadat", isAProgrammer: true}
app.js:9 {"firstname":"Shahadat","isAProgrammer":true}
app.js:13 {firstname: "Shahadat", isAProgrammer: true}

*/