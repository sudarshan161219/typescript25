"use strict";
const map = (array, predicate) => {
    if (array.length === 0) {
        return array;
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(predicate(array[i]));
    }
    return result;
};
const numbers = [65, 44, 12, 4];
const converted = map(numbers, (num) => num.toString());
console.log(converted);
