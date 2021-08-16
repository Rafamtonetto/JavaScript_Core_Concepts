"use strict";

//Asign value using var keyword
var price1 = 5;
var price2 = 10;
var total = price2 + price1;

console.log("Sum of price1 and price2 = ", total);

//Updating variables declared with var
var price1 = 21;
var price2 = 24;
var total = price2 + price1;

console.log("Updated sum of price1 and price2 = ", total);

//Re-declared the variables with var
var price1 = 500;
var price2 = 310;
var total = price2 + price1;

console.log("Sum of the re-declared price1 and price2 = ", total);

//Assign value using the let keyword
let dividend = 420;
let divisor = 20;
console.log("The division result: ", dividend/divisor);

//Update value using let keyword

dividend = 720;
divisor = 30;
console.log("The updated division result: ", dividend/divisor);

/*Let does not permit re-declaration;
Once a variable has been declared with let,
it can be updated but not redeclared
*/
/* 
let dividend = 880;
let divisor = 40;
*/

/*The const keyword represents constants
Constants can only be defined once.
Updates and redefinitions are not permitted
*/

const MY_BIRTHDAY = '14.10.1993';
console.log('My birtday is on ', MY_BIRTHDAY);

//MY_BIRTHDAY = '14.10.1983';

//When using var, a variable can be used before initialization
//This is know as variable hoisting

a= 10;
console.log("The value of a: ", a);
var a;

//with let and const, variable hoisting is not possible

