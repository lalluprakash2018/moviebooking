import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movie/Movies';
import Slides from './components/Slides';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards'
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Slides />
                <div className="mt-5">
                    <Movies />
                </div>
                {/* <Seats /> */}
            </div>
        );
    }
}