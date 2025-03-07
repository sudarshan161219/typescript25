"use strict";
//* Inheriting From Multiple Interfaces
// enum Roles {
//   admin = "admin",
//   author = " author",
//   editor = "editor",
// }
// interface Role {
//   role: Roles;
// }
// enum PermissionsList {
//   read = "read",
//   write = "write",
//   execute = "execute",
// }
// interface UserPermissions {
//   permissions: PermissionsList[];
// }
// interface User {
//   name: string;
//   email: string;
//   phone: number;
//   gender: string;
// }
// interface AdminUser extends User, Role, UserPermissions {
//   numberOfUsersReporting: number;
// }
// interface UserWithAddress extends User {
//   address: string;
// }
// const user: User = {
//   name: "John",
//   email: "John@email.com",
//   phone: 32233223,
//   gender: "male",
// };
// const userWithAddress: UserWithAddress = {
//   name: "mark",
//   email: "mark@email.com",
//   phone: 32233223,
//   gender: "male",
//   address: "This is an address",
// };
// const rob: AdminUser = {
//   name: "rob",
//   email: "Rob@email.com",
//   phone: 32233223,
//   gender: "male",
//   role: Roles.admin,
//   permissions: [
//     PermissionsList.execute,
//     PermissionsList.read,
//     PermissionsList.write,
//   ],
//   numberOfUsersReporting: 20,
// };
// console.log(user);
// console.log(userWithAddress);
// console.log(rob);
