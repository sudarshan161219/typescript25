//* More Control Over Classes

// class Person {
//   public fullName: string;
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public age: number
//   ) {
//     if (age > 200 || age < 0) {
//       throw new Error("The age must be  within the age range 0-200");
//     }
//     this.fullName = `${this.firstName} ${this.lastName}`;
//   }
// }

// const john: Person = new Person("John", "Doe", 45);
// const mark: Person = new Person("Mark", "Doe", 20);

// console.log(john.fullName);
