/* Task Description */
/*
 Write a function that sums an array of numbers:
 numbers must be always of type Number
 returns `null` if the array is empty
 throws Error if the parameter is not passed (undefined)
 throws if any of the elements is not convertible to Number
 */
function sum(array) {
    if (array === undefined) {
        throw new Error('You must enter an array of numbers!')
    } else if (!array.length) {
        return null;
    } else {
        if (!array.every(function(number){
                return number == Number(number);
            })) {
            throw new Error('All the element in the array must be numbers!');
        }

    return array.reduce(function(currSum, element){
        return currSum + +element;
    }, 0)

}
module.exports = sum;


function sum(array) {
    if (!array.length) {
        return null;
    } else if (array === undefined) {
        throw  new Error('You must enter an array of numbers!')
    } else {
        if (!array.every(function (number){
        return number === Number(number);
    })) {
            throw new Error('All the element in the array must be numbers!');
        }
        return array.reduce(function (previousElement, element) {
            return previousElement + element;
        }, 0)
    }
}
module.exports = sum;

    function sum(array) {
        function isNumber(num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
        }

        function hasNumericValues(array) {
            return array.every(isNumber);
        }

        if (arguments.length === 0) {
            throw new Error('The function has no parameters.');
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
    }

    module.exports = sum;

    function sum(array) {
        if (array === undefined) {
            throw 'Error! You must enter an array of numbers!';
        } else if (!array.length) {
            return null;
        } else {
            if (!array.every(function(number) {
                    return !isNaN(number);
                })) {
                throw 'Error! All the elements in the array must be convertible to Number!';
            }
        }

        return array.reduce(function(result, number) {
            return result += number * 1;
        }, 0);
    }

    module.exports = sum;