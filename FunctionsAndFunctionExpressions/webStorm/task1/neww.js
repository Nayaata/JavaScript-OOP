(function sum(array) {
    function hasNumericValues(array) {
        return array.every(isNumber);
    }

    function isNumber(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    if (arguments.length === 0) {
        throw new Error('You must enter an array of numbers!');;
    }

    if (!hasNumericValues(array)) {
        throw new Error('Every array element must be convertible to Number.');
    }

    if (array.length === 0) {
        return null;
    }

    return array.map(Number)
        .reduce(function(previous, current) {
            return previous + current;
        });
}());

module.exports = sum;



