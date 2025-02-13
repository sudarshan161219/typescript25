//* public members (Access Modifiers)

// class User {
//    public name: string;
//    readonly email: string;
//    lastname?: string;
 
//    constructor(name: string, email: string, lastname?: string) {
//      this.name = name;
//      this.email = email;
//      this.lastname = lastname;
//    }
 
//    public greet() {
//      return `Hello ${this.name}`;
//    }
//  }
 
//  class Admin extends User {
//    isAdmin: boolean = true;
//    usersReporting: number;
 
//    constructor(
//      name: string,
//      email: string,
//      usersReporting: number,
//      lastname?: string
//    ) {
//      // logical evaluation
//      super(name, email, lastname);
//      this.usersReporting = usersReporting;
//    }


//    public printName() {
//       console.log(this.name);
//    }
//  }
 
//  const user: User = new User("John", "john@email.com");
//  const admin: Admin = new Admin("Mark", "mark@email.com", 11);
 
// console.log(user.name);
// admin.printName()