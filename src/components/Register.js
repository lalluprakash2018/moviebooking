import React, { Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Register extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
             fname:'',
             email:'',
             phoneno:'',
             password:'',
             cfpassword:'',
             dob:'',
             errors:{
                 fname:'',
                 email:'',
                 password:''
             }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        let errors = this.state.errors;
        switch(name){
            case 'fname':
                errors.fname=value.length < 5 ? 'Full Name must be 5 characters long!' : '';
            break;
            case 'email': 
                errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
            break;
            default:
            break;
        }
        this.setState({errors, [name]: value}, ()=> {
             console.log(errors)
        })
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleChangeDatePicker = date => {
        this.setState({
          dob: date
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const { password, cfpassword } = this.state;
        if (password !== cfpassword) {
            alert("Passwords don't match");
        } else {
            alert("Done");
        }
    }

    render(){
        return(
            <div class="container">
                <form name="user" onSubmit={this.handleSubmit}>
                    <h3 class="text-center">Sign Up</h3>
                    <div class="row">
                        <div class="col-6 mx-auto">
                            <div class="row mt-2">
                                <div class="col-4 text-center">
                                    <label>Full name:</label>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" name="fname" value={this.state.fname} onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-4 text-center">
                                    <label>Date of Birth:</label>
                                </div>
                                <div class="col-6">
                                    <DatePicker
                                        selected={this.state.dob}
                                        onChange={this.handleChangeDatePicker}
                                        dateFormat="dd/MM/yyyy"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-4 text-center">
                                    <label>Email:</label>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-4 text-center">
                                    <label>Phone:</label>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" name="phoneno" value={this.state.phoneno} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-4 text-center">
                                    <label>Password:</label>
                                </div>
                                <div class="col-6">
                                    <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-4 text-center">
                                    <label>Conform Password:</label>
                                </div>
                                <div class="col-6">
                                    <input type="password" class="form-control" name="cfpassword" value={this.state.cfpassword} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-12 text-center">
                                    <input type="submit" name="submit" value="Login" class="btn btn-success"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;