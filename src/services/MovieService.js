import movies from './movies.json';

export default class MovieService {
    static getMovies() {
        return movies ? movies : [];
    }
    static getMoviesById(id){
        movies.map((item) =>{
            if(item.id === parseInt(id)){
                return item ? item : {};
            }
        });
    }
}