/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
function analyzer() {
	let result = {};
	let ArrayOfKey = Object.keys(this);
	let ArrayOfvalue = Object.values(this);
	result.numProperties = ArrayOfKey.length;
   
	let countNum = 0;
	for (let one of ArrayOfKey) {
	  if (one.length < 3) countNum++;
	}
	result.cntShortName = countNum;
   
	let countObj = 0;
	for (let key of ArrayOfvalue) {
	
	  if (typeof key=== "object") {
		countObj++;
	  }
	}
	result.cntReference = countObj;
   
	return result;
  }
/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name=name;
    this.country=country;
    this.grades=grades;
    this.computeGrade=function(){
        let total=0;
        let gradeArr=this.grades;
        for(let key of gradeArr){
            total +=key;
        
        }
        let Average=total/gradeArr.length;
        return Average;
    
    }
}


