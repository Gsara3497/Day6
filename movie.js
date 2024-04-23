// 1. 
class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }
    get getPG(){
        let titles = "";
        if(this.rating == "PG"){
           titles+= this.title;
        }
        return titles;
    }
}

// b)
let rating = new Movie("Theri", "Seven Screen");
console.log(`1. B.)
Title : ${rating.title}
Studio : ${rating.studio}
Rating : ${rating.rating}`)

// c)
let PG = new Movie("Thunivu", "vijay studio");
console.log(`C.)
Title : ${PG.title}
Studio : ${PG.studio}
Rating : ${PG.rating}

Title : ${PG.getPG}, ${rating.title}
`)


// d)
let movie = new Movie("Casino Royale", "Eon Productions", "PG-13")
console.log(`D.)
Title : ${movie.title}
Studio : ${movie.studio}
Rating : ${movie.rating}`) 

//output:
//Running] node "e:\dev\FSD6\js\oop movie.js"
//1. B.)
//Title : Theri
//Studio : Seven Screen
//Rating : PG
//C.)
//Title : Thunivu
//Studio : vijay studio
//Rating : PG

//Title : Thunivu, Theri

//D.)
//Title : Casino Royale
//Studio : Eon Productions
//Rating : PG-13

//[Done] exited with code=0 in 0.694 seconds
