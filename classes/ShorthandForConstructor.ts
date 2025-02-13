//* Shorthand For Constructor

// class User {
//   constructor(
//     public name: string,
//     public readonly email: string,
//     private phone: number,
//     public lastname?: string
//   ) {}
//   public greet(): string {
//     return `Hello ${this.name}`;
//   }
// }

// class Admin extends User {
//   isAdmin: boolean = true;

//   constructor(
//     name: string,
//     email: string,
//     public usersReporting: number,
//     phone: number,
//     lastname?: string
//   ) {
//     // logical evaluation
//     super(name, email, phone, lastname);
//   }

//   public greet(): string {
//     return `Hello ${this.name}! I am the admin`;
//   }
// }

// const user: User = new User("John", "john@email.com", 123456789);
// const admin: Admin = new Admin("Mark", "mark@email.com", 11, 123456789);

// console.log(user.greet());
// console.log(admin.greet());
