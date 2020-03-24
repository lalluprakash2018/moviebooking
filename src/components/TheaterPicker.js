import React, { Component } from 'react';
import TheaterService from '../services/TheaterService';
import TheaterList from './TheaterList';


class TheaterPicker extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             theaters:[],
             movie:props.movie
        };
    }
    componentDidMount() {
        TheaterService.getTheaters().map((item) =>{
            if(item.movie == parseInt(this.props.movie)){
                var newitem={
                    name:item.name,
                    time:item.times
                }
                this.setState(prevState => ({
                    theaters: [...prevState.theaters, newitem]
                }));
            }
        });
    }
    render() {
        return (
            <div className="container">
                <TheaterList theater={this.state.theaters}/>
            </div>
        )
    }
}

export default TheaterPicker;
