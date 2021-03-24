/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(object) {
    if (object === undefined) {
        return "no object passed";
        } else if (object === null) {
        return "null argument";
        } else {
        if (Object.keys(object).length === 0) {
        return "object has no properties";
        } else {
        let henok = [];
        let result;
        for (let key in object) {
        henok.push(key); //[a,z,m]
        result = henok.sort().join("."); //[a,m,z]
        //"a.m.z" 
        }
        return result;
        }
        }
}
