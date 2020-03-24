import React, { useState, Component } from 'react';
// import Tabs from './Tabs';
import Slides from './Slides';
import { Link } from 'react-router-dom';
import ViewTheaters from './ViewTheaters';

class Admin extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        if(sessionStorage.getItem("user")!=='admin'){
            window.open("http://localhost:3000","_self");
        }
    }

    logout(){
        localStorage.removeItem('name');
        window.open("http://localhost:3000","_self");
    }
    render() {
        return (
            <div>
                <button onClick={this.logout}>Logout</button>
                <Link to="/theaterlist" className="btn btn-info">Theaters</Link>
            </div>
        )
    }
}

export default Admin;
