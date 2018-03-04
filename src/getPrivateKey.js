const params = require('./_params');

module.exports = (function () {
    const max = params.modulus - 2;
    const min = 2;
    return Math.round(min - .5 + Math.random() * (max - min + 1));
})();
