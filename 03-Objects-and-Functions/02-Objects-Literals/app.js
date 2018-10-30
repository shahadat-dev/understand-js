var Mati = {
	firstname: 'Shahadat',
	lastname: 'Mati',
	address:{
		street: 'Sadhur Mor',
		town: 'Raninagar',
		city: 'Rajshahi'
	}
}

function greet(person){
	console.log("Hi " + person.firstname);
}

greet(Mati);

greet({
	firstname: 'Shahnaz',
	lastname: 'Ety'
});

/*
Output:

app.js:12 Hi Shahadat
app.js:12 Hi Shahnaz

*/