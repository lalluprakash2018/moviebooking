import React, { Component } from 'react';
import Header from './Header';
import MovieService from '../services/movies.json';
import MovieDetails from './MovieDetails';
import TheaterPicker from './TheaterPicker';

class Theaters extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movie: {}
        };
    }

    componentDidMount() {
        MovieService.map((item) =>{
            if(item.id == parseInt(this.props.match.params.id)){
                this.setState(() => ({ movie: item }));
            }
        });
    }
    render() {
        return (
            <div>
                <Header />
                <MovieDetails movie={this.state.movie} />
                <div>
                    <TheaterPicker movie={this.props.match.params.id}/>
                </div>
            </div>
        )
    }
}

export default Theaters;
