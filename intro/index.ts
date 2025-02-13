//* String Types
var firstName: string = "John"
// firstName = 1
let automobile: string = "BMW"
const city = "New York"
let students = 32
let studentAsString: string = students.toString()

//* Number Types
var age: number = 23
let year: number = 2025
const numberOfMembers = 61
// numberOfMembers = 68
let stringToNumber: number = parseInt("1985")

//* Booleans 
let isStudent : boolean = true
const alwaysStudent = true
let minimunAge : boolean = age >= 6 ? true : false

//* Null and Undefined Types
let user: undefined;
// console.log(user);

let userRole: null
userRole = null
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

const safeIntPlusOne = safeInt + 1
const safeIntPlusTwo = safeInt + 2

console.log(safeIntPlusOne);
console.log( safeIntPlusTwo);


let bigint1: bigint = BigInt(1234)
let bigint2: bigint = 123456789n

console.log(bigint1);

let c: bigint = bigint1 - bigint2

// let e:bigint = 12345.6n

// let f = Math.log(bigint1)


//* Symbol Type

let id: symbol = Symbol(1234)
let aplhabeticId : symbol = Symbol("id")

let userDb = {
   [id] : "1234",
   name: "Sudarshan",
   getId(){
      return this[id]
   }
}


console.log(userDb.name);
console.log(userDb.getId());
