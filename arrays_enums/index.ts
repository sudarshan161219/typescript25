// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.

let arrayNum: number[] = [1, 2, 3];
let arrayString: string[] = ["a", "b", "c"];

//* 2. Create a tuple person that holds a string (name) and a number (age).

type Person = [string, number];
let person: Person = ["John", 23];

//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.

type ColorArray = readonly string[];
type Point = readonly [number, number];

let colorsArr: ColorArray = ["red", "blue", "green"];
let point: Point = [50, 100];

//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending

enum StatusEnum {
  Active = "active",
  Inactive = " inactive",
  Pending = "pending",
}

//* 5. Create an object as const called Status with the same structure as an StatusEnum

const Status = {
  Active: "active",
  Inactive: " inactive",
  Pending: "pending",
} as const;
