"use strict";
//* generics instead of  function overloads
// type Filter = {
//   (array: number[], predicate: (item: number) => boolean): number[];
//   (array: string[], predicate: (item: string) => boolean): string[];
//   (array: object[], predicate: (item: object) => boolean): object[];
// };
// const filter = <T> (array: T[], predicate: (item: T) => boolean): T[] => {
//   let result:T[] = [];
//   for (let i = 0; i < array.length; i++) {
//     if (predicate(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
// let numbers = [1, 2, 3, 45, 56.8, 99, 52, 69];
// function predicate(item: number) {
//   return item > 7;
// }
// let animals = ["cat", "dog", "monkey"];
// function filterCat(item: string) {
//   return item === "cat";
// }
// console.log(filter(numbers, predicate));
// console.log(filter(animals, filterCat));
