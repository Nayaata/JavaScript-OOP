function solve () {
    return function task2(x, y) {

        var result = [],
            i;

        function isPrime(num) {
            var k,
                len = Math.sqrt(num),
                flag = true;
            for (k = 2; k <= len; k += 1) {
                if (!(num % k)) {
                    flag = false;
                }
            }
            return flag;
        }

        if (isNaN(+x) || isNaN(+y)) {
            throw new Error('yes');
        } else if (arguments.length < 2) {
            throw new Error('yes');
        }

        for (i = x; i <= y; i += 1) {
            if (isPrime(i)) {
                result.push(i);
            }
        }
        return result;

    }
}
