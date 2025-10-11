function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    console.log ("Your random number is: " + (Math.floor(Math.random() * (max - min + 1)) + min));
}

random(1, 5)
random(13, 74)
random(100)
random(153.5)