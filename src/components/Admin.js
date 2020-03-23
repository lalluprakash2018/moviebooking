import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import ViewTheaters from './ViewTheaters';
import Header from './Header';

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
        sessionStorage.setItem('isSignedIn', 0);
        localStorage.removeItem('name');
        window.open("http://localhost:3000","_self");
    }
    render() {
        console.clear();
        console.log(sessionStorage.getItem("user"));
        return (
            <div>
                <Header />
                <div>Welcome {sessionStorage.getItem("user")}</div>
                <button onClick={this.logout}>Logout</button>
                <Link to="/theaterlist" className="btn btn-info">Theaters</Link>
            </div>
        )
    }
}

export default Admin;
