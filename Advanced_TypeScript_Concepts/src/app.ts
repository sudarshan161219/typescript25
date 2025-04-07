//* Discriminated Unions and Exhaustiveness Checking

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Retangle = {
  kind: "retangle";
  length: number;
  breadth: number;
};

type Shape = Circle | Square | Retangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "retangle":
      return shape.length * shape.breadth;
    default:
      const _exhaustiveCheck: never = shape;
      throw new Error("Unhandled shape type");
  }
}
