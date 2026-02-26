function GenerateKey(length, characters) {
    let key = ''
    const CharLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * CharLength);
        key += characters[randomIndex]
    }
    console.log ("Your key is: " + key)
}

GenerateKey(14, "csa")
GenerateKey(3, "srhbfwed")
GenerateKey(8, "qwertyui")