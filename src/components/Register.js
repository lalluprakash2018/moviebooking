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
             isValid:false,
             errors:{
                 fname:false,
                 email:false,
                 password:false
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
                errors.fname=value.length=== 0 ? 'Please enter the name.' : '';
            break;
            case 'email': 
                errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
            break;
            case 'password':
            case 'cfpassword':
                errors.password = value.length===0 ? 'Password should not be blank' : '';
            break;
            default:
            break;
        }
        //this.setState({errors, [name]: value}, ()=> {
            // if(!errors.fname.length || !errors.fname.email || !errors.fname.password){
            //     this.setState({
            //         isValid:true
            //     });
            // }
            // else{
            //     this.setState({
            //         isValid:false
            //     });
            // }
        //})
        this.setState({errors, [name]: value});
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
        // const { password, cfpassword } = this.state;
        // if (password !== cfpassword) {
        //     alert("Passwords don't match");
        // } else {
        //     alert("Done");
        // }
        // const {fname,email,password} = this.state.errors;
        // console.log(fname);
        // if(this.state.isValid){
        //     alert("done");
        // }
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
                                    <input type="text" class="form-control" name="fname" value={this.state.fname} onChange={this.handleChange} onBlur={this.handleChange} required/>
                                </div>
                                <div style={{display:this.state.fname.length ?'none':'inline'}}>
                                   {this.state.errors.fname}
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
                                    <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange} onBlur={this.handleChange}/>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-4 text-center">
                                    <label>Conform Password:</label>
                                </div>
                                <div class="col-6">
                                    <input type="password" class="form-control" name="cfpassword" value={this.state.cfpassword} onChange={this.handleChange} onBlur={this.handleChange}/>
                                </div>
                            </div>
                            <div>{this.state.errors.password}</div>
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