import React, { Component } from 'react';
import TheaterService from '../services/theaters.json';

class SeatLayout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            theater:{}
        }
    }

    componentDidMount(){
        TheaterService.map((item)=>
            (item.name === this.props.match.params.name) ?
                this.setState({theater:item}) : {}
        );
    }
    
    render() {
        return (
            <div>
                <h3 className="text-center">{this.state.theater.name}</h3>
                <div>
                    <button>Edit Seat layout</button>
                </div>
            </div>
        )
    }
}

export default SeatLayout
