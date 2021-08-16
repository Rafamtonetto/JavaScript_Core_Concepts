"use strict";

var myCar = {
	make: "Volvo",
	model: "s60",
	color: "Grey",
	price: "42000",

	seats: {
		color:"Brown",
		material: "Leather"
	}
}

//console.log("My car: ", myCar);

var yourCar = myCar;
//shallow copy
//console.log("Your car: ", yourCar);

yourCar.tyres = "Pirelli";
yourCar.seats.color = "Grey"; 

//console.log("Your car: ", yourCar);
//console.log("My car: ", myCar);

var hisCar = Object.assign({}, myCar);
//deep copy
hisCar.color = "Red";
hisCar.seats.color = "Neon Green";

//console.log("The effect of Object.assign():");
//console.log("His car: ", hisCar);
//console.log("My car: ", myCar);

var herCar = {...myCar};
//shallow copy
//console.log("Her car: ", herCar);

herCar.seats.color = "Black";

//console.log("The effect of spread sintax:");
//console.log("Her car: ", herCar);
//console.log("My car: ", myCar);

myCar = {
	make: "Volvo",
	model: "s60",
	color: "Grey",
	price: "42000",

	seats: {
		color:"Brown",
		material: "Leather"
	}
}

yourCar = JSON.parse(JSON.stringify(myCar));
//JSON.stringify faz uma deep copy de myCar porém transforma todos os dados em strings
//JSON.parse transforma esta string em um objeto novamente
//este método não funciona bem para objetos que possuem funções
yourCar.tyres = "Pirelli";
yourCar.seats.color = "Purple"; 

//console.log("The effect of JSON.parse() and JSON.stringiy():");
//console.log("Your car: ", yourCar);
//console.log("My car: ", myCar);
