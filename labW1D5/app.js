/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function countSubstring(s, target) {
    let count=0;
    for(let i=0;i<s.length;i++){
        let k=0;
        while(k<target.length){
            if(target[k]===s[i+k]){
                k+=1;    
            }else{
            break;
        }
    }
    if(k===target.length){
        count+=1;
    }
    return count;
}

// Save obj in localStorage
function saveInLocalStorage(name, obj) {
    let result=localStorage.setItem(name,JSON.stringify(obj));
    return result;
    
}

// Return value of name in local storage
function getFromLocalStorage(name) {
    let outPut=localStorage.getItem(name);
    return JSON.parse(outPut);

}

// This function has an unbounded this. When it is called, the this will be bound to some object
// The argument "obj" is a single key/value pair, e.g. {location:"Fairfield"}
// It can be any key/value pair
// addMissProperty tests the object bound to its "this" for the key of "obj" (e.g., location)
// If the bound object doesn't have that key then the key and its value is added to the bound object.
function addMissingProperty(obj) {
}

// Constructor function which creates object {name:name, country:country, creationData:...}
// Where creationDate is the time that the object is created.
function Person(name, country) {
    this.name=name;
    this.country=country;
    this.creationDate=new this.creationDate;
}


// The parameter "students" is an array of student objects. Each student object has form
// {name:some name, country: some country}
// This function creates a Map using the "students" parameter and sets the value of each student
// in it to zero. This will be the number of classes that the student has missed.
// The function incrementAbscences (see next) can be called to increment the number of absences.
function register(students) {
    let map=new map();
    for(let i=0;i<students.length;i++){
        map.set(i,0);
    }
}

// Parameters:
// course is a Map mapping student objects to an integer which is the number of days missed
// student is an object that can be used as a key to course.
// This function increments the number of days missed for the student.
//function incrementAbsences(course, student){

}