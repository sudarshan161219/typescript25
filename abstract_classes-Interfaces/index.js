"use strict";
//* Introduction to Interfaces
class Admin {
    constructor(userName, email, adminLevel) {
        this.userName = userName;
        this.email = email;
        this.adminLevel = adminLevel;
    }
    login() {
        console.log("Admin now logged in");
    }
}
class Customer {
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }
    login() {
        console.log("Customer now logged in");
    }
}
class Auth {
    static login(user) {
        user.login();
    }
}
const admin = new Admin("Mark", "Mark@email.com", 1);
const customer = new Customer("John", "John@email.com");
Auth.login(admin);
Auth.login(customer);
