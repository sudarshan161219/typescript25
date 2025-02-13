"use strict";
//* Generics Use Case
// type Identifiable = {
//   id: number;
// };
// class Repository<T extends Identifiable> {
//   private items: T[] = [];
//   add(item: T) {
//     this.items.push(item);
//   }
//   getById(id: number): T | undefined {
//     return this.items.find((item) => item.id === id);
//   }
//   getAll(): T[] {
//     return this.items;
//   }
//   removeById(id: number): void {
//     this.items = this.items.filter((item) => item.id !== item.id);
//   }
// }
// type User = Identifiable & {
//   name: string;
//   email: string;
// };
// type Book = Identifiable & {
//   title: string;
//   ISBN: number;
// };
// const usersRepository = new Repository<User>();
// const booksRepository = new Repository<Book>();
// usersRepository.add({
//   id: 1,
//   name: "Sudarshan",
//   email: "test@email.com",
// });
// booksRepository.add({
//   id: 1,
//   title: "Harry Potter",
//   ISBN: 123456789,
// });
// console.log(usersRepository.getById(1));
// console.log(booksRepository.getAll());
