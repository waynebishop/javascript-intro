// Make sure you open up the console in your browser! 
console.log("Hello world");

/* 
This is a multi line 
comment!
*/

// Variable that holds my name using camelCase
var myName = "Wayne Andrew Bishop";

// How many characters are in my name?
console.log(myName.length);

// Variable that holds my age
var myAge = 15;

// If the user is older than 21
if( myAge >= 21 ) {

	console.log("You are an adult");

} else if( myAge >= 13 ) {

	console.log("You are a teenager")

} else {

	console.log("You are a child");

}

// Check the length of the visitors name
if( myName.length == 0 ) {
	console.log("Your name is required");
} else if( myName.length > 10 ) {
	console.log("Your name must be at most 10 characters. You have written " + myName.length);
} 

// An array (list, collection etc) of people. [] means create a literal array. Remember counts from 0.
var people = ["Wayne","Karen","Shaun"];  

console.log( people );

console.log( people[0] );

// Loop over all the people int he people array
// and display their name in the console. i is short for iterations. i++ same as i=i+1 . 
for( var i = 0; i < people.length; i++ ) {
	console.log( people[i] );
} 

// Tell Javascript to find the button with the ID = Hello
var helloButton = document.querySelector("#hello");

// Listen for clicks on the hello button - event listener
helloButton.onclick = function(){
	alert('Hello!');
}


















