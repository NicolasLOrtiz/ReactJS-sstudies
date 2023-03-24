const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!Reflect.get(obj, prop)) {
      console.log(
        `Hm... This property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${String(prop)} is ${Reflect.get(obj, prop)}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(
        `Changed ${String(prop)} from ${Reflect.get(obj, prop)} to ${value}`
      );
      Reflect.set(obj, prop, value);
    }

    return true;
  },
});

// personProxy.name
// personProxy.age = 43
// personProxy.name = "Jane Doe"

export default personProxy;
