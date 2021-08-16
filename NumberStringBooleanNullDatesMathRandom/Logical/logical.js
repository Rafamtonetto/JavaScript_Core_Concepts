"use strict";

console.log("Logical operators");

let A = 13, B = 25

if(A >=12 && B<=25)
	console.log("A + B = ", A + B);

let X = 15, Y = 20

if(X > 20 || Y<25)
	console.log("X + Y = ", X + Y);

var result = !(X == Y);
console.log("Result of !(X == Y) is: ", result)

let condition;
console.log("condition = ", condition = (100 > 10) ? true : false);
console.log("condition = ", condition = (100 < 10) ? true : false);

let maxValue;
console.log("maxValue = ", maxValue = (100 > 10) ? 100 : 10);