"use strict";

function mphToKmph(mph) {
	console.log("MP value entered: ", mph);

	return 1.61 * mph;
}

let speedLimit = mphToKmph(65);
console.log("Speed limit in Km/h: ", speedLimit);

let mphToKmphArrow = mph => 1.61 * mph;

speedLimit = mphToKmphArrow(65);
console.log("Speed limit in Km/h: ", speedLimit);

let mphToKmphImplicit = mph => 1.61 * mph

speedLimit =  mphToKmphArrow(65);
console.log("Speed limit in Km/h (Implicit return): ", speedLimit);

let triangleArea = (base, height) => 0.5 * base * height;
console.log("Area of a triangle with the base of 5 and height of 4: ", triangleArea(5, 4));

let functionCopy = triangleArea;
console.log("Area of a triangle with the base of 8 and height of 4: ", functionCopy(8, 14));

var x = function(f){return 5 * (f-32) / 9};
console.log("50F in celcius is: ", x(50));
