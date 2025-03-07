"use strict";
//* Difference Between a Abstract Class and an Interface
class Person {
    greet() {
        console.log(`Hello ${this.name}`);
    }
    static nameClass() {
        return "class name is Person";
    }
}
class RegisteredPerson extends Person {
    constructor(name, email, phone) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
const registeredPerson = new RegisteredPerson("John", "John@email.com", 123456789);
console.log(registeredPerson);
registeredPerson.greet();
console.log(RegisteredPerson.nameClass());
class RegisteredUser {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
const registeredUser = new RegisteredUser("Mark", "mark@email.com", 123456789);
