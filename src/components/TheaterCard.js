import React, { Component } from 'react';
import TimeCard from './TimeCard';
import { Link } from 'react-router-dom';

export default class TheaterCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sample:props.details
        }
    }
    
    render() {
        return (
            <div className="row mt-4">
                <div className="col-4 text-secondary py-2">
                    <strong>{this.props.details.name}</strong>
                </div>
                {
                    this.props.details.time.map(timePick => <Link to={`/reserve/${timePick}/${this.props.details.name}`}><TimeCard time={timePick}/></Link>)
                }
            </div>
        )
    }
}