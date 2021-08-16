"use strict";
/*
let prices = new Array(10, 20, 36, 40, 47);
let shallowCopy = prices;

console.log("Before changind the shallowCopy, prices: \n", prices);

shallowCopy[0] = 70;

console.log("Before changind the shallowCopy, prices: \n", prices);

let deepCopy = prices.slice();

console.log("Before changind the deepCopy, prices: \n", prices);

deepCopy[0] = "Eighty"

console.log("After changing the shallowCopy, prices: \n", prices);

console.log("The contents of deepCopy = \n", deepCopy);

prices.push(100);
console.log("Contents of prices after a push:", prices);

prices.unshift(0);
console.log("Contentes of prices after a unshift:", prices);

prices.pop();
console.log("Contentes of prices after a pop:", prices);

prices.shift();
console.log("Contentes of prices after a shift:", prices);

delete prices[2];
console.log("Contentes of prices after a delete:", prices);


let dogBreeds = ["Labrador", "Beagle", "Golden Retriever", "Doberman", "German Sheperd", "Boxer"];

console.log("Original contents of dogBreeds: \n", dogBreeds);

dogBreeds.splice(3, 0, "Poodle", "Dalmatian");

console.log("contents of dogBreeds after splice: \n",dogBreeds);

dogBreeds.splice(1, 2, "Indi");

console.log("dogBreeds after splice: \n", dogBreeds);

let sliceOfDogBreeds = dogBreeds.slice(3);
console.log("dogBreeds.slice(3): \n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(3, 5);
console.log("dogBreeds.slice(3, 5): \n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(-3, -1);
console.log("dogBreeds.slice(-3, -1): \n", sliceOfDogBreeds);



let europeOffices = ['Bucharest', 'Prague', 'Rome'];
let africaOffices = ['Durban', 'Nairobi'];
let oceaniaOffices = ['Christchurch', 'Sydney'];

let southernOffices = africaOffices.concat(oceaniaOffices);

console.log("southernOffices: \n", southernOffices);

console.log("africaOffices: ", africaOffices);
console.log("oceaniaOffices:", oceaniaOffices);

let allOffices = africaOffices.concat(oceaniaOffices, europeOffices);

console.log("allOffices: ", allOffices);

let sortedOffices = allOffices.sort();

console.log("allOffices after sorting: \n ", allOffices);

console.log("allOffices after reverse sorting: \n ", allOffices.reverse());

allOffices = africaOffices.concat(oceaniaOffices, europeOffices);

console.log("Sorted copy of allOffices using spread syntax: \n",
	[...allOffices].sort());

console.log("Sorted copy of allOffices using spread syntax: \n",
	allOffices.slice().sort());

console.log("allOffices after sorting: \n", allOffices);

*/

let numArray = [20, 50, 3, 10, 35];

console.log("Original numArray: \n", numArray);

console.log("numArray after sorting: \n", numArray.slice().sort());

numArray.sort(function(a,b){return a-b});

console.log("numArray after numArray.sort with compare function: \n", numArray);


numArray.sort(function(a,b){return b-a});

console.log("numArray after reverse sort with compare function: \n", numArray);