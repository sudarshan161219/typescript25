let city = "New York"; // string
let population = 8400000; // number
const age = 32; // 32
let oldAge = 79 as const; // 79
let newAge = oldAge; // 79
let data = new Map(); // Map<any, any>
let score = [90, 86, 100]; // array // number[]
type Primitive = string | number | boolean; //string | number | boolean
type CustomName = "John" extends string ? string : "John"; // string
type CustomAge = typeof newAge extends number ? 79 : number; // 79
type CheckData = typeof data extends Object ? true : false; // true
type CheckScore = typeof score extends never ? {} : []; // false // []

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85; // invalid
// score.push(10); // valid
// score.push("New Score"); // invalid
// let customAge: CustomAge = 50; // invalid
// let primitive: Primitive = new Date(); // invalid
// let years: CheckScore = []; // valid