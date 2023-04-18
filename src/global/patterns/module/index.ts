import double, * as math from "./math";
import {
  add as addValues,
  multiply as multiplyValues,
  square,
  subtract,
} from "./math";

function add(...args: number[]) {
  return args.reduce((acc, cur) => cur + acc);
}

function multiply(...args: number[]) {
  return args.reduce((acc, cur) => cur * acc);
}

// named export
addValues(7, 8);
multiplyValues(8, 9);
subtract(10, 3);
square(3);

add(8, 9, 2, 10);
multiply(8, 9, 2, 10);

// default export
double(8);

// all export
math.default(7);
math.multiply(8, 9);
math.subtract(10, 3);
math.square(3);

// Dinamic import
window.addEventListener("click", () => {
  import("./math.js").then((module) => {
    console.log("Add: ", module.add(1, 2));
    console.log("Multiply: ", module.multiply(3, 2));

    window.alert("Check the console");
  });
});

async function loadDogImage(num: number) {
  const res = await import(`../assets/dog${num}.png`);
  return res.default;
}

/*************************** */
/**** Or with async/await ****/
/*************************** */
// window.addEventListener("click", async () => {
//   const module = await import("./math.js");
//   console.log("Add: ", module.add(1, 2));
//   console.log("Multiply: ", module.multiply(3, 2));
// });
