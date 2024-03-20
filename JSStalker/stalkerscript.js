//a. Ask for the user’s first name 
var firstName=prompt("What is your first name ? ");
//b. Ask for the user’s last name
var lastName=prompt("What is your last name ? ");
//c. Ask for the user’s age
var age=prompt("How old are you ? ");
var fulllName=firstName+" "+lastName;

//d. Print out the user’s full name in a message within a pop-up box: 
//“Hello, full name! Welcome to this page.”
alert("Hello, "+fulllName+"! Welcome to this page.");

//e. Print out the user’s age in a sentence in the browser’s JavaScript console:
// “You are age years old.”
console.log("You are "+age+" years old.");

//f. Print out the user’s full name and age in a sentence directly to the HTML 
//document (stalker.html): “Hello, full name! You are age years old.”
document.write("Hello, "+fulllName+" ! You are "+age+" years old.");


