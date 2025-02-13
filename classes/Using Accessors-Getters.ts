//* Using Accessors - Getters

// class Person {
//   private _age?: number;

//   constructor(public firstName: string, public lastName: string) {}

//   public set age(age: number) {
//     if (age > 200 || age < 0) {
//       throw new Error("The age must be  within the age range 0-200");
//     }
//     this._age = age;
//   }

//   public get age() {
//     if (this._age === undefined) {
//       throw new Error("Age property not defined");
//     }
//     return this._age;
//   }

//   public get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const john: Person = new Person("John", "Doe");
// const mark: Person = new Person("Mark", "Doe");
// john.age = 45;

// console.log(john.age);
// console.log(john.fullName);
