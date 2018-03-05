module.exports = function(base, exp, modulus) {
    base%= modulus;
    result = 1;

    while (exp > 0) {
        if (exp & 1) result = (result * base) % modulus;
        base = (base * base) % modulus;
        exp >>= 1;
    }

    return result;
}
