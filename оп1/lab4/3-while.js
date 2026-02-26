function sumWhile(...agrs) {
    let total = 0;
    let i = 0;
    while (i < agrs.length) {
        total += agrs[i];
        i++;
    }
    console.log("Sum is: " + total)
}

sumWhile(1, 5, 10) 
sumWhile(2, 3)
sumWhile(10, 20, 30, 40, 50)