import { injectable } from "inversify";

@injectable()
export class UserController {
  constructor() {}

  public getUser() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "JohnDoe123@email.com",
    };
  }
}
