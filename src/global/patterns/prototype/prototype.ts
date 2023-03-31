interface Dog {
  play(): void;
}

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

class SuperDog extends Dog {
  constructor(name: string) {
    super(name);
  }

  fly() {
    return "Flying!";
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new SuperDog("Max");

console.log(Dog.prototype);

console.log(Object.getPrototypeOf(dog1));

Dog.prototype.play = () => console.log("Playing now!");

dog1.play();

console.log("dog2 prototype: ", Object.getPrototypeOf(dog2));

const dog = {
  bark() {
    console.log(`Woof!`);
  },
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));

export { dog1, dog2 };
