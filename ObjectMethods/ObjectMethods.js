"use strict";

const myCar = {
	make: "Volvo",
	model: "S60",
	price: 42000,
	color:"Grey",

	seats:{
		material: "Leather",
		color: "Brown"
	}
}

var samsCar = Object.create(myCar);
//Shallow Copy
samsCar.seats.color = "White";
/*
console.log("The effect of Object.create():")
console.log("samsCar: \n", samsCar);
console.log("MyCar: \n", myCar);


console.log("What are the Object's key?");
console.log(Object.keys(myCar));

console.log("What are the Object's values?");
console.log(Object.values(myCar));

console.log("What are the Object's entries?");
console.log(Object.entries(myCar));

*/

let s60Engine= {
	cylinders: 4,
	displacement: 2000,
	horsepower:250
}

let yourCar = Object.assign(myCar, {engine: s60Engine});
//shallow Copy
/*
console.log("The effect of Object.assign():")
console.log("yourCar: \n", yourCar);
console.log("MyCar: \n", myCar);
*/

let herCar = Object.freeze(myCar);
//Permite modificar apenas neasty elements of objects porém altera o resto.
//herCar.color = "Yellow";
herCar.seats.color = "Red";


//herCar.tyres = "Pirelli";
herCar.seats.bucket = true;

//console.log("The effect of Object.freeze():")
//console.log("HerCar: \n", herCar);
//console.log("MyCar: \n", myCar);

let hisCar = Object.seal(myCar)
//shallow copy

//hisCar.color = "White";
hisCar.seats.color = "White";

//hisCar.weight = 1632;
hisCar.seats.torque = 350;

console.log("The effect of Object.seal():")
console.log("HisCar: \n", hisCar);
console.log("MyCar: \n", myCar);