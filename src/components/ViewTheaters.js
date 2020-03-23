import React, { Component } from 'react';
//import TheaterService from '../services/TheaterService';
import TheaterService from '../services/theaters.json';
import { Link } from 'react-router-dom';

class ViewTheaters extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             theaters : TheaterService
        }
    }
    // componentDidMount(){
    //     this.setState(()=>({theaters:TheaterService.getTheaters()}));
    // }
    render() {
        console.log(this.state.theaters);
        return (
            <div>
                {
                    this.state.theaters.map(
                        item => <div><Link to={`/seatlayout/${item.name}`}>{item.name}</Link></div>
                    )
                }
            </div>
        )
    }
}

export default ViewTheaters;
