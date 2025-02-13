"use strict";
//* keyof type operator
// type Events = {
//   id: number;
//   date: Date;
//   type: "indoor" | "outdoor";
// };
// type UnionOfKeysOfEvents = keyof Events;
// let idOfEvent: UnionOfKeysOfEvents = "id";
// let dateOfEvents: UnionOfKeysOfEvents = "date";
// //? index Signature
// type Numeric = {
//   [key: number]: string;
// };
// type NumricKeyOf = keyof Numeric;
// type NumberAndString = {
//   [key: string]: string;
// };
// type NumberAndStringKeyOf = keyof NumberAndString;
// let stringObject: NumberAndString = {
//   0: "first",
//   second: "second",
// };
// console.log(stringObject["0"]);
// type Person = {
//   name: string;
//   age: string;
//   address: string;
// };
// type PartialPerson = {
//   [K in keyof Person]?: Person[K] | null;
// };
// let partial: PartialPerson = {
//    name:"John"
// }
