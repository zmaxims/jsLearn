"use strict";

const numberOfFilms = +prompt(`Сколько  фильмов`, "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt(`Последний фильм`, "");
    const b = prompt("Ваша Оценка");

    if (a != null && b != null && a != '' && b != "" && b.length < 50) {
        personalMovieDB.movies[a] = b;
        else
            i--;
    }
}

if (personalMovieDB.count < 10 ){
  Console.log("Мало фильмов"); 

 else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    Console.log("Нормально фильмов");\
    
else if (personalMovieDB.count >= 30 ) {
    console.log("Дохуя фильмов");
else 
console.log("Ошибка");  
}
 } 

}
console.log(personalMovieDB);