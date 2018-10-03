module.exports = function getZerosCount(number, base) {
    let zeros = 0;
    let n = +parseInt(number,base);

    while (n > 0) {
        n = Math.floor(n / 5);
        zeros = zeros + n;
    } 
    return zeros;
}