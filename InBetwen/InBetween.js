function between(a, b) {
    var array = [];
    for (var i = a; i <= b; i++) {
        array.push(i);
    }
    return array;
}
// console.log(between(1, 6));
module.exports = between;
