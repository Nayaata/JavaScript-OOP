function solve () {
    return function sum (array) {
        if(array === undefined){
            throw new Error('You must enter an array of numbers!');
        }else if(!array.length){
            return null;
        }else{
            if(array.every(function(element){
                    return element == Number(element);
                })){
                throw new Error ('All of the elements in the array must be numbers!');
            }
        }

        return array.reduce(function(element, currSum){
            return currSum + +element;
        }, 0);

    }
}