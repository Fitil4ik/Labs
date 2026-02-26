function sumReduce(...args) {
     console.log("Sum is: " + args.reduce((acc, n) => acc + n, 0));
}

sumReduce(1, 5, 10) 
sumReduce(2, 3)
sumReduce(10, 20, 30, 40, 50)