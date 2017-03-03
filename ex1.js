function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {
    if (!(typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function")) {
        throw Error("Illegal arguments in call to function");
    }
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};
try {
    console.log(cb(3, "3", add));
    console.log(cb(3, 3, sub));
    console.log(cb(5, 5, function (n1, n2) {
        return n1 * n2;
    }));
} catch(err) {
    console.log("Error: " + err.message);
}