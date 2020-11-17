"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt(`Сколько  фильмов`, "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt(`Сколько  фильмов`, "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`Последний фильм`, "");
            const b = prompt("Ваша Оценка");

            if (a != null && b != null && a != '' && b != "" && b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }

        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {

            console.log("Мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Нормально фильмов");
        } else if (personalMovieDB.count >= 30) {
            console.log("Дохуя фильмов");
        } else {
            console.log("Ошибка");
        }

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
            if (personalMovieDB.private) {
                personalMovieDB.private = false;
            }else {
                personalMovieDB.private = true;
            }
    },
    writeYouGenres: function() {
        
         for (let i = 1; i <2; i++) {

            let genres = prompt(`введите все жанры чере запятую`).toLowerCase;

            if (genres == '' || genres == null) {
                console.log('не корректные данные');
                 i--;

             } else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        
           personalMovieDB.genres.forEach((item, i) => {
               console.log(`Любимый жанр ${i+1} - это ${item}`);
           });
        }
    }


};
