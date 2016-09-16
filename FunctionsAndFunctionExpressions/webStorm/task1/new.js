function sum(array) {
    if (array === undefined) {
        throw ('You must enter an array of numbers!');
    } else if (!arr.length) {
        return null;
    } else {
        if (!arr.every(function(number) {
                return number == Number(number);
            })) {
            throw ('All of the element in the array must be numbers!');
        }
    }

    return array.reduce(function(result, element) {
        return result += element * 1;
    }, 0);
}

module.exports = sum;

function solve () {
    return function sum(arr) {
        if (arr === undefined) {
            throw new Error('You must enter an array of numbers!');
        } else if (!arr.length) {
            return null;
        } else {
            if (!arr.every(function (element) {
                    return element == Number(element);
                })) {
                throw new Error('All of the element in the array must be numbers!');
            }

            return arr.reduce(function (currSum, number) {
                return currSum + +number;
            }, 0);
        }
    }
}
