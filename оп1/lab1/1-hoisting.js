const fn = () => {
  var a = 5
  console.log({a}); // { a: 5 }
  var a = 10;
  console.log({a}); // { a: 10 }
};

fn()