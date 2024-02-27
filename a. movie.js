class movie {
    constructor(title, studio, rating) {
        this.title = "Casino royale";
        this.studio = "EON Production";
        // this.rating = rating
        if (rating == null) {
            return this.rating = 'PG';
        } else {
            return this.rating = rating;
        }
    }
    getPG(array) {
        var res = array.filter((element) => element.rating == 'PG13');
        return res
    }
}

let movie1 = new movie('Casino royale', 'Eon Productions', 'PG13')



let movies = [movie1];
console.log(movie1.getPG(movies));
