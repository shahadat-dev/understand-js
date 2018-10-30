// Usage of Closure

function makeGreeting(language){
	
	return function(firstname, lastname){
		
		if(language === 'en'){
			console.log('Hello ' + firstname + ' ' + lastname);
		}	

		if(language === 'bn'){
			console.log('Ohe ' + firstname + ' ' + lastname);
		}

	}
	
}

/*
though lexically/physically returning anonymous function object sit inside
same makeGreeting function, it will create different execution context / closure  
(See Fig: 15-Function-Factories-using-Closure)
*/

var greetEnglish = makeGreeting('en'); // one execution context; language = 'en'
var greetBengali = makeGreeting('bn'); // another execution context; language = 'bn'

greetEnglish('Shahadat', 'Hossain');
greetBengali('Shahadat', 'Hossain');


/*
Output

app.js:6 Hello Shahadat Hossain
app.js:10 Ohe Shahadat Hossain

*/