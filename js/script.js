"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
        
    },

    writeYourGenres: function() {
        for(let i = 0; i < 1; i++) {
            let a = prompt(`Введите Ваши любимые жанры через запятую`).toLowerCase();
            if (a == null || a == '') {
                console.log('Вы ввели некорректные данные, либо не ввели ничего вовсе');
                i--;
            } else {
                personalMovieDB.genres = a.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    rememberMyFilm: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            
            if (a == null || b == null  || a.length > 50 || a == '' || b == '') {
                    alert(
                        'Произошла ошибка! Вы либо ничего не ответили, либо указали фильм с названием более 50 символов'
                    );
                    i--;
                    console.log('error');
                    continue;
            } else {
                personalMovieDB.movies[a] = b;
                console.log('done');
            }
        }
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilm();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);