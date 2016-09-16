function solve () {
    return function sum (array) {
        var result = 0;
        if(typeof (array) === 'undefined'){
            throw new Error('You must enter an array of numbers!');
        }else if(!array.length){
            return null;
        }else{
            if(array.every(function(element){
                    return isNaN(+element);
                })){
                throw new Error ('All the element in the array must be numbers!');
            }
        }

        array.forEach(function(element){
            result += element;
        });

        return result;
    }
}