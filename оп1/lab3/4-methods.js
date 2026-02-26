function introspect(iface) {
    const result = [];
    for (const key of Object.keys(iface)) {
        const value = iface[key];
        if (typeof value === "function") {
            result.push([key, value.length]);
        }
    }
    console.log (result);
}

const iface = {
    m1: x => [x],
    m2: function (x, y) { return [x, y]; },
    m3(x, y, z) { return [x, y, z]; },
    test: 123
};

introspect(iface)