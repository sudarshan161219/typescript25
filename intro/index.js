"use strict";
//* String Types
var firstName = "John";
// firstName = 1
let automobile = "BMW";
const city = "New York";
let students = 32;
let studentAsString = students.toString();
//* Number Types
var age = 23;
let year = 2025;
const numberOfMembers = 61;
// numberOfMembers = 68
let stringToNumber = parseInt("1985");
//* Booleans 
let isStudent = true;
const alwaysStudent = true;
let minimunAge = age >= 6 ? true : false;
//* Null and Undefined Types
let user;
// console.log(user);
let userRole;
userRole = null;
// console.log(userRole);
// console.log(userRole === user); ---> false
// if(!userRole){
//    console.log("This condition is true");
// }
// if(!user){
//    console.log("This condition is true");
// }
//* Bigint 
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);
let bigint1 = BigInt(1234);
let bigint2 = 123456789n;
console.log(bigint1);
let c = bigint1 - bigint2;
// let e:bigint = 12345.6n
// let f = Math.log(bigint1)
//* Symbol Type
let id = Symbol(1234);
let aplhabeticId = Symbol("id");
let userDb = {
    [id]: "1234",
    name: "Sudarshan",
    getId() {
        return this[id];
    }
};
console.log(userDb.name);
console.log(userDb.getId());
