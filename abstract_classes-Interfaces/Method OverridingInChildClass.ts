//* Method Overriding In Child Class

// type Holidays = {
//   date: Date;
//   reason: string;
// }[];

// abstract class Department {
//   protected abstract holidays: Holidays;
//   protected constructor(protected name: string) {}

//   public addHolidays(holidays: Holidays) {
//     if (Array.isArray(holidays)) {
//       for (const holiday of holidays) {
//         this.holidays.push(holiday);
//       }
//     }
//   }

//   public printHolidays() {
//     if (this.holidays.length === 0) {
//       return console.log("There are no holidays");
//     }

//     console.log("Here is the list of Holidays");

//     this.holidays.forEach((holiday, index) => {
//       console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
//     });
//   }
// }

// class ItDepartment extends Department {
//   protected holidays: Holidays = [];
//   constructor() {
//     super("IT Department");
//   }

//   public printHolidays() {
//     if (this.holidays.length === 0) {
//       return console.log("There are no holidays");
//     }

//     console.log(`Here is the list of Holidays ${this.name}`);

//     this.holidays.forEach((holiday, index) => {
//       console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
//     });
//   }
// }

// class AdminDepartment extends Department {
//   protected holidays: Holidays = [];
//   constructor() {
//     super("Admin Department");
//   }

//   public printHolidays() {
//     if (this.holidays.length === 0) {
//       return console.log("There are no holidays");
//     }

//     console.log(`Here is the list of Holidays ${this.name}`);

//     this.holidays.forEach((holiday, index) => {
//       console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
//     });
//   }
// }

// const itHolidays: Holidays = [
//   {
//     date: new Date(2025, 12, 25),
//     reason: "Christmas",
//   },
//   {
//     date: new Date(2025, 11, 21),
//     reason: "It department day",
//   },
// ];

// const adminHolidays: Holidays = [
//   {
//     date: new Date(2025, 12, 25),
//     reason: "Christmas",
//   },
//   {
//     date: new Date(2025, 10, 1),
//     reason: "admin department day",
//   },
// ];

// const itDepartment: ItDepartment = new ItDepartment();
// const adminDepartment: AdminDepartment = new AdminDepartment();

// itDepartment.addHolidays(itHolidays);
// adminDepartment.addHolidays(adminHolidays);

// itDepartment.printHolidays();
// adminDepartment.printHolidays();
