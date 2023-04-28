class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const animalFunctionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!"),
};

const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");

console.log(pet1.name);
// @ts-ignore
console.log(pet1.bark());
// @ts-ignore
console.log(pet1.play());

window.indexedDB.open("toDoList");

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "";
});

window.onbeforeunload = function () {
  console.log("Unloading!");
};

console.log(
  "From WindowEventHandlers mixin: onbeforeunload",
  window.onbeforeunload
);

console.log(
  "From WindowOrWorkerGlobalScope mixin: isSecureContext",
  window.isSecureContext
);

console.log(
  "WindowEventHandlers itself is undefined",
  // @ts-ignore
  window.WindowEventHandlers
);

console.log(
  "WindowOrWorkerGlobalScope itself is undefined",
  // @ts-ignore
  window.WindowOrWorkerGlobalScope
);

export { Dog, dogFunctionality };
