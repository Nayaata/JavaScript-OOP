function slve() {
    var module = (function () {
        return {
            
        }
    }());
}

//Player
function slve() {
    var module = (function () {
        return {
            getPlayer: function (name){
        // returns a new player instance with the provided name
    },
    getPlaylist: function(name){
        //returns a new playlist instance with the provided name
    },
    getAudio: function(title, author, length){
        //returns a new audio instance with the provided title, author and length
    },
    getVideo: function(title, author, imdbRating){
        //returns a new video instance with the provided title, author and imdbRating
    }
        }
    }());
}


//Validations and Exceptions
function funcName(value, name) {
    name = name || 'Value';
    if (value === undefined) {
    throw new Error(name + 'cannot be undefined');
    }

    if (typeof value !== 'string') {
        throw new Error();
    }

    if (value.length < min || max < value.length) {
        throw new Error();
    }
}