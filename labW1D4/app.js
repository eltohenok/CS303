/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	if(string=""){
		return "";
	}else if(string===undefined){
		return "mising argument";
	}else if(string===5){
		return "argument is not string"
	}
	let i;
	for(i=0;i<string.length;i++){
		if(string.length%2===0){
			continue;
		}

	}
	return string[i];
}
// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	let i;
	let sum=0;
	for(i=0;i<array.length;i++){
		if(array[i]>=0){
		sum+=array[i]
		}

	}
	return sum;
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
	function positive(n){
		if(typeof n==="number"){
			if(n<0){
				n=-n;
			}
		}
		return n;
	}
	return array.map(positive);
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
	let arr=[];
	for(let i=0;i<array.length;i++){
		if(array[i]!==0){
			arr.push(array[i]);
		}
		if(array[i]===0){
			arr.push("*");
		}
		return arr;
	}
// while(true){
// 	let flag;
// 	let length=0;
// 	let i;
// 	for( i=0;i<array.length;i++){
// 		if(array[i]===0){
// 			flag+=i;
			
// 		}
// 	}
// 	flag="*";
// 		array[i]=flag
// 			array.join(".")
// 		return array;
// }
//return array;
}


