import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.Logout=this.Logout.bind(this);
        this.state = {
             isShowing:sessionStorage.getItem("isSignedIn")
        };
    }
    componentDidMount(){
        if(sessionStorage.getItem("isSignedIn") == null || sessionStorage.getItem("user") == null){
            sessionStorage.setItem('isSignedIn', 0);
            sessionStorage.setItem('user', '');
        }
        this.setState({isShowing:sessionStorage.getItem("isSignedIn")})
    }
    Logout(){
        sessionStorage.setItem('isSignedIn', 0);
        sessionStorage.setItem('user', '');
        window.open("http://localhost:3000","_self");
    }
    render() {
        
        console.log("username"+sessionStorage.getItem("user"));
        console.log("isShowing"+this.state.isShowing);
        return (
            <div style={BoxStyle}>
                <nav className="header navbar navbar-dark bg-dark">
                    <div className="container">
                        <div className="row full-width">
                            <i className="fa fa-film fa-2x text-white my-auto"></i>
                            <div className="h3 ml-3 my-auto text-light Header-width" href="/">Movie Card</div>
                            <div className="float-right" style={{display:`${this.state.isShowing == 0 ? 'inline' : 'none'}`}}>
                                <Link to="/signup" className="btn btn-light btn-sm">Sign In</Link>
                            </div>
                            <div className="float-right" style={{display:`${this.state.isShowing == 1 ? 'inline' : 'none'}`}}>
                                <button className="btn btn-light btn-sm" onClick={this.Logout}>LogOut</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
const BoxStyle={
    boxShadow: 'box-shadow: 5px 5px 18px #888888;'
    
}

export default Header
