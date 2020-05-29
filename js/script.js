"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

let a, b;

for (let i = 0; i < 2; i++) {
    a = prompt('Один из последних просмотренных фильмов?', '');
    b = prompt('На сколько оцените его?', '');
    console.log('start ' + i);
    
    if (a == undefined || b == undefined  || a.length > 50 || a == '' || b == '') {
            alert('Произошла ошибка! Вы либо ничего не ответили, либо указали фильм с названием более 50 символов');
            i--;
            continue;
    } else {
        personalMovieDB.movies[a] = b;
        console.log('end ' + i);
    }
}
console.log(personalMovieDB);