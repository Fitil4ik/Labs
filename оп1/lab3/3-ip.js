function ipToNumber(ip = "127.0.0.1") {
    const bytes = ip.split(".").map(Number);
    const number = bytes.reduce((acc, byte, index) => {
        const shift = (3 - index) * 8;
        return acc + (byte << shift);
    }, 0); 
    console.log("Your number is: " + number);
}

ipToNumber();
ipToNumber("127.0.0.1");
ipToNumber("10.0.0.1");
ipToNumber("192.168.1.10");
ipToNumber("165.225.133.150");
ipToNumber("0.0.0.0");