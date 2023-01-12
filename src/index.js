module.exports = function reverse (n) {
    n = Math.abs(n);
    let numToStr = String(n);
    let i = 0;
    let result = '';
    for (i = 0; i < numToStr.length; i++) {
    result =`${numToStr[i]}${result}`;
    } return +result;
}
