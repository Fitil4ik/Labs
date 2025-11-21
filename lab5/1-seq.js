function seq(...funcs) {
    const functions = [...funcs];
    const chain = (...nextFuncs) => {
        if (typeof nextFuncs[0] === 'number') {
            const result = functions.reduceRight((acc, fn) => fn(acc), nextFuncs[0]);
            console.log ("Result is: " + result);
            return result;
        } else {
            functions.push(...nextFuncs);
            return chain;
        }
    };

    return chain
}

seq(x => x + 7)
   (x => x * 2)(5)

seq(x => x * 2)
   (x => x + 7)(5)

seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)