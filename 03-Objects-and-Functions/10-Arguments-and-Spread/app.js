function greet(firstname, lastname, language){
	language = language || 'en'

	if(arguments.length === 0){
		console.log('Missing parameters!');
		console.log('-------------------------------------');
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments); // it's not an array, but works like array
	console.log('-------------------------------------');
}

greet();
greet('Shahadat');
greet('Shahadat', 'Hossain');
greet('Shahadat', 'Hossain', 'bn')


/*
Output:

Missing parameters!
-------------------------------------
undefined
undefined
en
[]
-------------------------------------
Shahadat
undefined
en
(1) ["Shahadat"]
-------------------------------------
Shahadat
Hossain
en
(2) ["Shahadat", "Hossain"]
-------------------------------------
Shahadat
Hossain
bn
(3) ["Shahadat", "Hossain", "bn"]

*/