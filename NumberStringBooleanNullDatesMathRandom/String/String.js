"use strict";

let str_double_quotes = "JavaScript";
let str_single_quotes = 'programming language';

console.log("Welcome to " + str_double_quotes);
console.log("It is a " + str_single_quotes);

let str_back_sticks = `Is ${str_double_quotes} a ${str_single_quotes} ?`
console.log("String with back ticks: ", str_back_sticks);

let sum = `${1+2+3}`
console.log(`The expression evaluated to a value of ${sum}.`);

console.log("The expression evaluated to a value of ${sum}.");

let sentence = "I\"love\"spinache"

console.log("String defined with scape characters", sentence);

let multline_str = 
`	This is a 
	string which
	spans multiple lines`;

console.log("A multi-line string: \n", multline_str);

var name_str1 = "David";
var name_str2 = "David";

var name_obj1 = new String("David");
var name_obj2 = new String("David");

console.log("Type of name_str1: ", typeof name_str1);
console.log("Type of name_obj1: ", typeof name_obj1);
console.log("Type of name_str2: ", typeof name_str2);
console.log("Type of name_obj2: ", typeof name_obj2);

console.log("Is name_str1 == name_str2?", name_str1 == name_str2);
console.log("Is name_str1 == name_obj1?", name_str1 == name_obj1);
console.log("Is name_obj1 == name_obj2?", name_obj1 == name_obj2);
console.log("Is the valueOf name_obj1 double equal to valueOf name_obj2? : ", name_obj1.valueOf() == name_obj2.valueOf());

console.log("Is name_str1 === name_str2?", name_str1 === name_str2);
console.log("Is name_str1 === name_obj1?", name_str1 === name_obj1);
console.log("Is name_obj1 === name_obj2?", name_obj1 === name_obj2);
console.log("Is the valueOf name_obj1 triple equal to valueOf name_obj2? : ", name_obj1.valueOf() === name_obj2.valueOf());


let empName = "Jane Chang";

console.log("Number of characters in empName is: " + empName.length);
console.log("Index of h is : " + empName.indexOf("h"));
console.log("'Ch' occurs at position: " + empName.search("Ch"));

var line = "Fundamentals of JavaScript";

console.log("Original line: ", line);
console.log("Slice (1,12): ", line.slice(1,12));
console.log("Slice (-23, -15):",line.slice(-23,-15));
console.log("Slice (13):", line.slice(13));

console.log("Replacing 'JavaScript' with 'Web programming'", line.replace("JavaScript", "Web programming"));

console.log("Replacing 'JavaScript' with 'Python'", line.replace("Javascript","Python"));

console.log("Replacing 'JavaScript/i' with 'Python'", line.replace(/Javascript/i,"Python"));

console.log("Default replace of 'a' with 'A': ", line.replace("a","A"));

console.log("Global replace of 'a' with 'A': ", line.replace(/a/g, "A"));

console.log("Splitting the line on space: ", line.split(" "));

var myString = "        Hey, this is BR";
console.log("After the trim operation: " + myString.trim());
console.log("Before the trim operation: " + myString);