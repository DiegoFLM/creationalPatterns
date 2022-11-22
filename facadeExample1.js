class FetchMusic {
    get resources() {
        return [
            { id: 1, title: "The Fragile" },
            { id: 2, title: "Alladin Sane" },
            { id: 3, title: "OK Computer" }
        ];
    }
  
    fetch(id) {
        return this.resources.find(item => item.id === id);
    }
}
  
class GetMovie {
    constructor(id) {
        return this.resources.find(item => item.id === id);
    }
  
    get resources() {
        return [
            { id: 1, title: "Apocalypse Now" },
            { id: 2, title: "Die Hard" },
            { id: 3, title: "Big Lebowski" }
        ];
    }
}
  
const getTvShow = function(id) {
    const resources = [
        { id: 1, title: "Twin Peaks" },
        { id: 2, title: "Luther" },
        { id: 3, title: "The Simpsons" }
    ];
  
    return resources.find(item => item.id === 1);
};
  
const booksResource = [
    { id: 1, title: "Ulysses" },
    { id: 2, title: "Ham on Rye" },
    { id: 3, title: "Quicksilver" }
];

  
  /*
  
    * Music requires a new instance and then passing and ID within the method get;
    * Movie's each instance returns the data, requires ID during initialization;
    * TV Show is just a single function that accepts an ID and returns the data;
    * Books are just a resource, we need to query it ourselves.

  */





const TYPE_MUSIC = "music";
const TYPE_MOVIE = "movie";
const TYPE_TV = "tv";
const TYPE_BOOK = "book";

class CultureFacade {
    constructor(type) {this.type = type;}

    _findMusic(id) {
        const db = new FetchMusic();
        return db.fetch(id);
    }

    _findMovie(id) {return new GetMovie(id);}
    _findTVShow(id) {return getTvShow(id);}
    _findBook(id) {return booksResource.find(item => item.id === id);}

    get _error() {
        return { status: 404, error: `No item with this id found` };
      }
    
    _tryToReturn(func, id) {
        const result = func.call(this, id);

        return new Promise((ok, err) => !!result
            ? ok(result)
            : err(this._error));
    }

    get(id) {
        switch (this.type) {
            case TYPE_MUSIC: {
                return this._tryToReturn(this._findMusic, id);
            }

            case TYPE_MOVIE: {
                return this._tryToReturn(this._findMovie, id);
            }

            case TYPE_TV: {
                return this._tryToReturn(this._findTVShow, id);
            }

            case TYPE_BOOK: {
                return this._tryToReturn(this._findBook, id);
            }

            default: {
                throw new Error("No type set!");
            }
        }
    }
}
  


const music = new CultureFacade(TYPE_MUSIC);
music.get(6)
    .then(data => console.log(data))
    .catch(e => console.error(e));





