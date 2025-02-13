"use strict";
//* Overriding Methods In Child Classes
// class User {
//   public name: string;
//   readonly email: string;
//   lastname?: string;
//   private phone: number;
//   constructor(name: string, email: string, phone: number, lastname?: string) {
//     this.name = name;
//     this.email = email;
//     this.lastname = lastname;
//     this.phone = phone;
//   }
//   public greet(): string {
//     return `Hello ${this.name}`;
//   }
// }
// class Admin extends User {
//   isAdmin: boolean = true;
//   usersReporting: number;
//   constructor(
//     name: string,
//     email: string,
//     usersReporting: number,
//     phone: number,
//     lastname?: string
//   ) {
//     // logical evaluation
//     super(name, email, phone, lastname);
//     this.usersReporting = usersReporting;
//   }
//   public greet(): string {
//     return `Hello ${this.name}! I am the admin`;
//   }
// }
// const user: User = new User("John", "john@email.com", 123456789);
// const admin: Admin = new Admin("Mark", "mark@email.com", 11, 123456789);
// console.log(user.greet());
// console.log(admin.greet());
