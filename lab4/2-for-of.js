function sumForOf(...agrs) {
    let total = 0;
    for (const num of agrs) {
        total += num;
    }
    console.log("Sum is: " + total)
}

sumForOf(1, 5, 10) 
sumForOf(2, 3)
sumForOf(10, 20, 30, 40, 50)