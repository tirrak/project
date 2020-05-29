"use strict";


//Первое задание
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//Второе задание
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);