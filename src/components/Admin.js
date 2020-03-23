import React, { useState, Component } from 'react';
// import Tabs from './Tabs';
import Slides from './Slides';
import { Link } from 'react-router-dom';
import ViewTheaters from './ViewTheaters';
//import { Button, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap'
//import { Button, InputGroupAddon, InputGroupText,InputGroup,Input } from 'reactstrap'
//import classnames from 'classnames';
class Admin extends Component {
    constructor(props) {
        
        super(props)
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick  = this.handleClick.bind(this);
        // const [activeTab, setActiveTab] = useState('1');

        // const toggle = tab => {
        //     if(activeTab !== tab) setActiveTab(tab);
        // }
        // this.state = {
        //     name:''
        // };
    }
    componentDidMount(){
        if(sessionStorage.getItem("user")!=='admin'){
            window.open("http://localhost:3000","_self");
        }
        // if(parseInt(sessionStorage.getItem("isSignedIn"))===1){
        //     window.open("http://localhost:3000");
        // }
    }
    logout(){
        localStorage.removeItem('name');
        window.open("http://localhost:3000","_self");
    }
    // handleClick(){
    //         alert(this.state.name);
    //     }
    //     handleChange(e){
    //             this.setState({ [e.target.name]: e.target.value });
    //         }
            render() {
                return (
            <div>
                <button onClick={this.logout}>Logout</button>
                {/* <ViewTheaters /> */}
                <Link to="/theaterlist" className="btn btn-info">Theaters</Link>
                {/* <Slides />
                <Tabs /> */}

                {/* <Button color="primary" onClick={this.handleClick}>Submit</Button>
                <div>
                    <form>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>To the Left!</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" name="name" onChange={this.handleChange}/>
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <Input />
                            <InputGroupAddon addonType="append">
                            <InputGroupText>To the Right!</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>To the Left!</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="and..." />
                            <InputGroupAddon addonType="append">
                            <InputGroupText>To the Right!</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </form>
                </div> */}
            </div>
        )
    }
}

export default Admin;
