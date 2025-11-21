function sumFor(...agrs) {
    let total = 0;
    for (let i = 0; i < agrs.length; i++) {
        total += agrs[i];  
    }
    console.log("Sum is: " + total)
}

sumFor(1, 5, 10) 
sumFor(2, 3)
sumFor(10, 20, 30, 40, 50)