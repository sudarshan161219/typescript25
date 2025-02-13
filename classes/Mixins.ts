 //* Mixins

// type Constructor = new (...args: any[]) => {};

// function TimeStamp<T extends Constructor>(Base: T) {
//   return class extends Base {
//     protected timestamp: Date = new Date();

//     getTimeStamp() {
//       return this.timestamp;
//     }
//   };
// }

// class User {
//   constructor(public name: string) {}
// }

// class UserWithTimeStamp extends TimeStamp(User) {
//   constructor(name: string, public age: number) {
//     super(name);
//   }
//   displayInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//     console.log(`TimeStamp: ${this.getTimeStamp()}}`);
//   }
// }

// const user: UserWithTimeStamp = new UserWithTimeStamp("Sudarshan", 1000);

// console.log(user);
// user.displayInfo();
