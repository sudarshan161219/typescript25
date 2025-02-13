"use strict";
// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let arrayNum = [1, 2, 3];
let arrayString = ["a", "b", "c"];
let person = ["John", 23];
let colorsArr = ["red", "blue", "green"];
let point = [50, 100];
//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Active"] = "active";
    StatusEnum["Inactive"] = " inactive";
    StatusEnum["Pending"] = "pending";
})(StatusEnum || (StatusEnum = {}));
//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
    Active: "active",
    Inactive: " inactive",
    Pending: "pending",
};
