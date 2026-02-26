function iterate(object) {
  const keys = Object.keys(object);
  keys.forEach(key => {
    const value = object[key];
    console.log({ key, value }); 
  });
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj);
const obj2 = { name: "Alice", age: 30, city: "New York" };
iterate(obj2);