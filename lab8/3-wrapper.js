function contract(fn, ...types) {
  const returnType = types[types.length - 1];
  const argTypes = types.slice(0, -1);
 return function(...args) {
    args.forEach((arg, index) => {
      const expectedType = argTypes[index];
            if (typeof arg !== expectedType.name.toLowerCase()) {
        throw new TypeError(`Argument ${index} must be a ${expectedType.name}`);
      }
    });

    const result = fn(...args);
    if (typeof result !== returnType.name.toLowerCase()) {
      throw new TypeError(`Result must be a ${returnType.name}`);
    }

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);

const res1 = addNumbers(2, 3);
console.log(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);

const res2 = concatStrings('Hello ', 'world!');
console.log(res2);

const res3 = concatStrings(1, 3) //TypeError: Argument 0 must be a String