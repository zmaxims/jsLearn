"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Сколько  фильмов`, "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`Сколько  фильмов`, "");
    }
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

start();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`Последний фильм`, "");
        const b = prompt("Ваша Оценка");

        if (a != null && b != null && a != '' && b != "" && b.length < 50) {
            personalMovieDB.movies[a] = b;}
            else {
                i--;}
                
        }
    }


rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {

        console.log("Мало фильмов");
    }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Нормально фильмов");
        }

        else if (personalMovieDB.count >= 30) {
                console.log("Дохуя фильмов");
            }
        else{
                console.log("Ошибка");
            }
                    
            }
    


detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden)  {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYouGenres() {
    for (let  i  =  1; i <=3;  i++)  {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под № ${i}`);  
    }
}