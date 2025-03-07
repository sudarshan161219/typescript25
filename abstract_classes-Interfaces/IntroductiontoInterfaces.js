"use strict";
//* Introduction to Interfaces
// interface User {
//   userName: string;
//   email: string;
//   login(): void;
// }
// class Admin implements User {
//   constructor(
//     public userName: string,
//     public email: string,
//     public adminLevel: number
//   ) {}
//   login(): void {
//     console.log("Admin now logged in");
//   }
// }
// class Customer implements User {
//   constructor(public userName: string, public email: string) {}
//   login(): void {
//     console.log("Customer now logged in");
//   }
// }
// class Auth {
//   public static login(user: User) {
//     user.login();
//   }
// }
// const admin: Admin = new Admin("Mark", "Mark@email.com", 1);
// const customer: Customer = new Customer("John", "John@email.com");
// Auth.login(admin)
// Auth.login(customer)
