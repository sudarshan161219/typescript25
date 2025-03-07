// //* Interfaces and Generics

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

// class Car implements AutoMobile<string, AutoMobileBrands, AutoMobileColors> {
//   public type: string = "car";
//   constructor(
//     public brand: AutoMobileBrands,
//     public color: AutoMobileColors[],
//     public description: string
//   ) {}
// }

// class Truck implements AutoMobile<string, AutoMobileBrands, AutoMobileColors> {
//   public type: string = "truck";
//   constructor(
//     public brand: AutoMobileBrands,
//     public color: AutoMobileColors[],
//     public description: string
//   ) {}
// }

// const ferrariCar: Car = new Car(
//   AutoMobileBrands.ferrari,
//   [AutoMobileColors.red, AutoMobileColors.black],
//   "This is a Ferrari"
// );

// const toyotaTruck: Truck = new Truck(
//   AutoMobileBrands.toyota,
//   [AutoMobileColors.black, AutoMobileColors.grey],
//   "This is a Tyota Truck"
// );

// console.log(ferrariCar);
// console.log(toyotaTruck);
