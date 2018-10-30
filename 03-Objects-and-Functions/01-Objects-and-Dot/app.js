var person = new Object();

person["firstname"] = "Shahadat";
person["lastname"] = "Hossain";

var firtNameProperty = "firstname";

console.log(person);
console.log(person[firtNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "Sadhur Mor";
person.address.city = "Rajshahi";
person.address.country = "Bangladesh";

console.log(person.address.street);
console.log(person.address.city)
console.log(person['address']['country']);

/*
Output:

app.js:8: {firstname: "Shahadat", lastname: "Hossain"}address: {street: "Sadhur Mor", city: "Rajshahi", country: "BD"}firstname: "Shahadat"lastname: "Hossain"__proto__: Object
app.js:9 Shahadat
app.js:11 Shahadat
app.js:12 Hossain
app.js:19 Sadhur Mor
app.js:20 Rajshahi
app.js:21 Bangladesh

*/
