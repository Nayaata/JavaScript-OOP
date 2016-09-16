function solve() {
    let uniqueId = 0,
        playerId = 0,
        playlistId = 0,
        playableId = 0;

    const MAX_STRING_LENGTH = 3,
          MIN_STRING_LENGTH = 25;


    class Player{
        constructor(name){
            this._name = name;
            this._id = ++playerId;
            this._playlists = [];
        }

        get id() {
            return this._id;
        }

        get name(){
            return this._name;
        }
        set name(value){
            Validator.validateIfUndifined(value);
            Validator.validateString(value, 'Name');

            this._name = value;
        }

        addPlaylist(playlistToAdd){
            Validator.validateIfUndifined(playlistToAdd);
            Validator.validateIfObjest(playlistToAdd);

            this._playlists.push(playlistToAdd);
        }

        getPlaylistById(id){
            for (let item of this._playlists){
                if(item.id === id){
                    return item;
                }
            }

            return null;
        }

        removePlaylist(id){
            let i,
                len = this._playlists.length,
                found = false;

            for (i =0; i < len; i+=1){
                if(this._playlists[i].id === id){
                    this._playlists.splice(i, 1);
                    found = true;
                    break;
                }
            }

            if(found){
                throw new Error("Id not found");
            }
        }

        listPlaylists(page, size){
            let maxSize = page * size,
                sortedPlaylist = [];

            return sortedPlaylist;
        }

        contains(playable, playlist){
            //TODO
        }

        search(pattern){
            //TODO
        }
    }

    class PlayList{
        constructor(name){
            this._name = name;
            this._id = ++playlistId;
            this._playables = [];
        }

        get name(){
            return this._name;
        }

        get id(){
            return this._id;
        }

        get playables(){
            return this._playables;
        }

        set name(value){
            Validator.validateIfUndifined(value);
            Validator.validateString(value, "Name");

            this._name = value;
        }

        addPlayable(playable){
            Validator.validateIfUndifined(playable);
            Validator.validateIfObjest(playable);

            this._playables.push(playable);

            return this;
        }

        getPlayableById(id){
            for (let item of this._playables){
                if(item._id === id){
                    return item;
                }
            }

            return null;
        }

        removePlayable(id) {

            let len = this._playables.length ,
                index = -1;

            for (let i = 0; i < len; i += 1){
                if(this._playables[i]._id === id){
                    index = i;
                    break;
                }
            }

            this._playables.splice(index, 1);
            return this;
        }

        listPlayables(page, size) {
            let sortedPlaylist = [];

            return sortedPlaylist;
        }
    }

    class Validator {
        
        static validateIfUndifined(value, name){
            name = name || 'Value';
            
            if (value === undefined) {
                throw  new Error(`${name} cannot be undefined!`);
            }
        }

        static validateString(value, name){
            name = name || 'Value';

            isStringInRange = MAX_STRING_LENGTH > value.length && value.length > MIN_STRING_LENGTH;

            if (!isStringInRange) {
                throw  new Error(`${name} must be in range!`)
            }
        }

        static validatePositiveNumber(value){
            if (value < 1) {
                throw  new Error("Length must be positive number!");
            }
        }

        static validateImdbRating(value){
            if (value < 1 || value > 5) {
                throw new Error("IMDB rating must be in range!");
            }
        }

        static validateIfObjest(value){
            if (typeof value !== "object") {
                throw new Error("You must add an object!");
            }
        }
    }

    class Playable{
        constructor(title, author){
            this._id = ++playableId;
            this._title = title;
            this._author = author;
        }

        get id(){
            return this._id;
        }

        get title(){
            return this._title;
        }

        set title(value){
            Validator.validateIfUndifined(value, "Title");
            Validator.validateString(value, "Title");

            this._title = value;
        }

        get author(){
            return this._author;
        }

        set author(value){
            Validator.validateIfUndifined(value, "Author");
            Validator.validateString(value, "Author");

            this._author = value;
        }

        play(){
            let stringFormatted = `${this._id}.${this._title} - ${this._author}`;

            return stringFormatted;
        }
    }

    class Audio extends Playable{
        constructor(title, author, length){
            super(title,author);

            this._length = length;
        }

        get length(){
            return this._length;
        }

        set length(value){
            Validator.validateIfUndifined(value, "Length");
            Validator.validatePositiveNumber(value);

            this._length = value;
        }

        play(){
            let  formattedString = super.play() + `${this._length}`;

            return formattedString;
        }
    }

    class Video extends Playable{
        constructor(title, author, imdbRating){
            super(title, author);

            this._imdbRating = imdbRating;
        }

        get imdbRating(){
            return this._imdbRating;
        }

        set imdbRating(value){
            Validator.validateImdbRating(value);

            this._imdbRating = value;
        }

        play(){
            let formattedString = super.play() + `${this._imdbRating}`;

            return formattedString;
        }
    }

    return {
        getPlayer: function (name){
            return new Player(name);
        },
        getPlaylist: function(name){
            return new PlayList(name);
        },
        getAudio: function(title, author, length){
            return new Audio(title, author, length);
        },
        getVideo: function(title, author, imdbRating){
            return new Video(title, author, imdbRating);
        },
        getPlayable: function (title, author) {
            return new Playable(title, author);

        }
    };
}

module.exports = solve;