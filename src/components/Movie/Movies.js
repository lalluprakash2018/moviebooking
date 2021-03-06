import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
