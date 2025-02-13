"use strict";
/**
 * Practice Excercise for functions
 */
//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
function greet(name) {
    return `Hello ${name}`;
}
let product = {
    id: 1,
    name: "product",
};
function getProduct(id) {
    if (id === product.id) {
        return product;
    }
    else {
        throw new Error("Please provide valid id");
    }
}
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.
function logMessage(msg) {
    console.log("Hello, World!");
}
function throwError(error) {
    throw new Error(error);
}
