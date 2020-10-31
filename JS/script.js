"use strict";

const numberOfFilms  =  +prompt(`Сколько  фильмов`,"");

const  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt(`Последний фильм`,"");
const b = prompt("Ваша Оценка");
const c = prompt(`Последний фильм`,"");
const d = prompt("Ваша Оценка");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
