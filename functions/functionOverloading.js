"use strict";
//* function overloading
const str = "Hello, World!";
const part1 = str.slice(7);
const part2 = str.slice(7, 10);
console.log(part2);
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination,
        };
    }
    else if (typeof returnDateOrDepartingFrom === "string") {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination,
        };
    }
    throw new Error("please provide valid details to reserve a ticket");
};
console.log(reserve(new Date(), new Date(), "new York", " washington"));
console.log(reserve(new Date(), "new York", " washington"));
