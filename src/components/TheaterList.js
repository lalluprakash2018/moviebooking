import React, { Component } from 'react';
import TheaterCard from './TheaterCard';

class TheaterList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                {
                    this.props.theater.map(item => <TheaterCard details={item} />)
                }
            </div>
        )
    }
}

export default TheaterList
