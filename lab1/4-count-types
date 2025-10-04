const arr = [true, 'hello', 5, 12, -200, false, false, 'word']

const counts = { 
    number: 0, 
    string: 0, 
    boolean: 0 
};

for (const item of arr) {
    const type = typeof item;
    if (counts[type] !== undefined) {
        counts[type] += 1;
    }
}


console.log ({counts});