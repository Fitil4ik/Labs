function compose(...fns) {
    const listeners = [];
    const composed = (x) => {
        let result = x;
        for (let i = fns.length - 1; i >= 0; i--) {
            try {
                result = fns[i](result);
            } catch (error) {
                listeners.forEach((listener) => listener(error));
                return;
            }
        }
        return result;
    };
    composed.on = (event, fn) => {
        if (event === 'error') {
            listeners.push(fn);
        }
        return composed;
    };
    return composed;
}

const inc = x => ++x;
const twice = x => x * 2;
const fail = x => { if (x > 5) throw new Error('Too big'); return x; };

const f = compose(fail, inc, twice);

f.on('error', (err) => {
    console.log('Error caught: ' + err.message);
});

console.log(f(2));
console.log(f(5));
console.log(f(-2));