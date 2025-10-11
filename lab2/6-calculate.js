function square(x) {
    return ( x * x );
}

function cube(x) {
    return ( x * x * x );
}

function average(a, b) {
    return ( (a + b) / 2 );
}

function calculate() {
    const results =[]

    for (let i = 0; i <=9; i++) {
        const sq = square(i);
        const cb = cube(i);
        const avrg = average(sq, cb);
        results.push(avrg);
    }
    return results;
}

console.log (calculate())