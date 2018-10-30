function greet(firstname, lastname, language){
	language = language || 'en';

	if(language === 'en'){
		console.log('Hello ' + firstname + ' ' + lastname);
	}

	if(language === 'bn'){
		console.log('Ohe ' + firstname + ' ' + lastname);
	}
}


function greetEnglish(firstname, lastname){
	greet(firstname, lastname);
}

function greetBengali(firstname, lastname){
	greet(firstname, lastname, 'bn');
}

greetEnglish('Shahadat', 'Hossain');
greetBengali('Shahadat', 'Hossain');


/*

Output:

Hello Shahadat Hossain
Ohe Shahadat Hossain

*/


