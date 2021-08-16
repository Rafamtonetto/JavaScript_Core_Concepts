"use strict";

console.log("While loops");
/*
console.log("Integers from 1 to 10: ");

let i = 1;

while(i <= 10){
	console.log(i);
	i++;
}

console.log("Even integers from 1 to 10: ");

i = 1;

while(i <= 20){

	let num = i%2;
	
	if(num == 0){
		console.log(i);
	}
	
	i++;
}


console.log("Increasing order of series (with break) :");

i = 1;

while(i <= 10) {
	console.log(i);

	i++;

	if(i == 5){
		break;
	}
}


console.log("Decreasing order of the series(with continue):");

let i = 11;

while(i > 1){

	i--;

	if(i == 5){

		continue;
	}

	console.log(i)
}


console.log("do-while loops:");

let factorial = 1;
let n = 5;
let i = 1;

do{
	factorial *= i;
	i++;
}
while(i <= n);
console.log("Factorial of " + n + " = " + factorial);

*/

console.log("Fibonacci series using for loop: ");

let a  = 0, b = 1, c;
let count = 10;

for (let i = 3; i <= count; i++){

	c = a + b;
	a = b;
	b = c;

	console.log(c);
}



