//TMDB

const API_KEY = 'api_key=4b2f80cd90762f9ccc7da2268a54fe7f';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/157336?'+ API_KEY;

getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
    })
}
