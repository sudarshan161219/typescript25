//* Type Soundness

// let value: unknown = "Hello,Typescript!";
// let str: number = value as number;

// type User = {
//   name: string;
//   age: number;
// };

// const user = { name: "Alice", age: 30, isAdmin: true };
// const newUser: User = user;

// function printUser(user: User) {
//   console.log(user);
// }

// printUser(newUser);

// type Animal = {
//   name: string;
// };

// type Dog = Animal & {
//   breed: string;
// };

// let handleAnimal = (animal: Animal) => {
//   console.log(`Handling ${animal.name}`);
// };

// let handleDog: (dog: Dog) => void = handleAnimal;

// handleDog({ name: "Buddy", breed: "Labrador" });

// function logNumbers(...numbers: number[]) {
//   console.log(numbers);
// }

// logNumbers();

// function runFunction(func: () => void) {
//   func();
// }

// const getPi = () => 3.14;


// runFunction(getPi)