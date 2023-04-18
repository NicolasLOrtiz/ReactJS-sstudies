const add = (x: number, y: number) => x + y;
const subtract = (x: number, y: number) => x - y;

const multiply = (x: number, y: number) => x * y;
const square = (x: number) => x * x;

const double = (x: number) => x * 2;

const privateValue = "This is a value private to the module!";

export { add, multiply, subtract, square };

export default double;
