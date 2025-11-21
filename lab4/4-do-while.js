function sumDoWhile(...args) {
    if (args.length === 0) return 0;
    let total = 0;
    let i = 0;
    do {
        total += args[i];
        i++;
    } while (i < args.length);
    console.log("Sum is: " + total)
}

sumDoWhile(1, 5, 10) 
sumDoWhile(2, 3)
sumDoWhile(10, 20, 30, 40, 50)