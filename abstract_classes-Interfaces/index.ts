//* Difference Between a Abstract Class and an Interface

abstract class Person {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greet() {
    console.log(`Hello ${this.name}`);
  }

  public static nameClass(){
    return "class name is Person"
  }
}

class RegisteredPerson extends Person {
  constructor(public name: string, public email: string, public phone: number) {
    super();
  }
}

const registeredPerson: RegisteredPerson = new RegisteredPerson(
  "John",
  "John@email.com",
  123456789
);

console.log(registeredPerson);
registeredPerson.greet();
console.log(RegisteredPerson.nameClass())

interface User {
  name: string;
  email: string;
  phone: number;
  greeting: () => void;
}

class RegisteredUser implements User {
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ) {}

  public greeting() {
    console.log(`Hello ${this.name}`);
  }


}

const registeredUser: RegisteredUser = new RegisteredUser(
  "Mark",
  "mark@email.com",
  123456789
);
