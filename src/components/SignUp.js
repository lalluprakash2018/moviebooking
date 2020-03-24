import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import users from '../services/login.json';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signin = this.signin.bind(this);
        this.state={
            email:'',
            password:'',
            isShow:0,
            error:0
        };
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    signin(e){
        e.preventDefault();
        users.map((item) =>{
            if(item.username === this.state.email && item.password === this.state.password){
                sessionStorage.setItem('isSignedIn', 1);
                sessionStorage.setItem('user', this.state.email);
                window.open("http://localhost:3000","_self");
            }
            else if(this.state.email === 'admin' && this.state.password === 'admin'){
                sessionStorage.setItem('isSignedIn', 1);
                sessionStorage.setItem('user', 'admin');
                window.open("http://localhost:3000/admin","_self");
            }
            else{
                sessionStorage.setItem('isSignedIn', 0);
                this.setState(() => (
                    { 
                        error: 1
                    }
                ));
            }
        });
        if (sessionStorage.getItem("isSignedIn")) {
            this.setState(() => (
                { 
                    isShow: parseInt(sessionStorage.getItem("isSignedIn"))=== 1 ? 1 : 0
                }
            ));

        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6 mx-auto">
                            <h3 className="text-center">Login</h3>
                            <form>
                                <div className="row mt-4">
                                    <div className="col-6 text-justify">
                                        Email
                                    </div>
                                    <div className="col-6">
                                        <input type="text" name="email" className={`form-control form-control-sm${this.state.error?'border border-danger':''}`} onBlur={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-6 text-justify">
                                        Password
                                    </div>
                                    <div className="col-6">
                                        <input type="password" name="password" className={`form-control form-control-sm${this.state.error?'border border-danger':''}`} onBlur={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-6">
                                        <Link to="/Register" className="btn btn-light btn-sm">Create an account</Link>
                                    </div>
                                    <div className="col-6 text-center">
                                        <input type="submit" onClick={this.signin} className="btn btn-success form-control" value="Login" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;
