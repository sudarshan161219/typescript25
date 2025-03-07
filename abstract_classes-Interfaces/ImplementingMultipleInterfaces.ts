// //* Implementing Multiple Interfaces

// class User {
//   constructor(public name: string) {}
// }

// class Password {
//   constructor(public password: string) {}
// }

// class RegUser extends User, RegUser {}

// enum AutoMobilesTypes {
//   car = "car",
//   bus = " bus",
//   van = "van",
//   truck = "truck",
//   bike = "bike",
// }

// enum AutoMobileBrands {
//   ferrari = "ferrari",
//   honda = "honda",
//   bmw = "bmw",
//   toyota = "toyota",
// }

// enum AutoMobileColors {
//   red = "red",
//   blue = "blue",
//   black = "black",
//   grey = "grey",
//   silver = "silver",
// }

// interface AutoMobile<Type, Brand, Colors> {
//   type: Type;
//   brand: Brand;
//   color: Colors[];
//   description: string;
// }

// interface CommercialVehicle {
//   capacity: string;
//   licenseRenewalDate: Date;
// }

// class Truck
//   implements
//     AutoMobile<string, AutoMobileBrands, AutoMobileColors>,
//     CommercialVehicle
// {
//   public type: string = "truck";
//   constructor(
//     public brand: AutoMobileBrands,
//     public color: AutoMobileColors[],
//     public description: string,
//     public capacity: string,
//     public licenseRenewalDate: Date
//   ) {}
// }

// const toyotaTruck: Truck = new Truck(
//   AutoMobileBrands.toyota,
//   [AutoMobileColors.black, AutoMobileColors.grey],
//   "This is a Tyota Truck",
//   "15 Tonnes",
//   new Date()
// );

// console.log(toyotaTruck);
