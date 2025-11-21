const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            console.log ('Error! Expected a function.');
        }
    }
    return x => fns.reduce((all, fn) => fn(all), x);
};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log (f1(3));
console.log (f1(5));

const f2 = pipe(twice, cube, inc);
console.log (f2(3));
console.log (f2(5));

const f3 = pipe(inc, inc);
console.log (f3(3));
console.log (f3(5));

const f4 = pipe(cube, twice);
console.log (f4(3));
console.log (f4(5));

const f5 = pipe(twice, 5, inc); // Error