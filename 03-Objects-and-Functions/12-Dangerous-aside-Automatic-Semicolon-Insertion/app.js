/* Conceptual aside (Syntax Parser) : 

Javascript syntax parsers parse source code character by character.

*/

function greet(){
	// if nothing found after return statement JS syntax parser 
	// inserts a semicolon(;) automatically after return (eg. return;)
	return 
	{
		firstname: 'Shahadat'
	}
	
}

console.log(greet()); // undefined

function greetAnother(){
	
	return {
		firstname: 'Shahadat'
	}

}

console.log(greetAnother()); // {firstname: "Shahadat"}



// Framework Aside Whitespace

var 
    // first name of the person
    firstname, 
    
    // last name of the person
    lastname, 
    
    // the language
    // can be 'en' or 'es'
    language;

var person = {
    // the first name
    firstname: 'Shahadat',
    
    // the last name
    // (always required)
    lastname: 'Hossain'
}

console.log(person); // {firstname: "Shahadat", lastname: "Hossain"}