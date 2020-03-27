import React, {Component} from 'react';
import Modal from './Modal'
import '../modal.css';
class Dashboard extends Component{
    state = { show: false,
    name:'test' };

    showModal = () => {
    this.setState({ show: true });
    };

    hideModal = () => {
    this.setState({ show: false });
    };
    render(){
        return(
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                        <div>
                            <div>
                                <label>Email</label>
                                <input type="text" name="username" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" name="password" />
                            </div>
                            <div>
                                <button>Login</button>
                            </div>
                        </div>
                    </Modal>
                    <button type="button" onClick={this.showModal}>
                        open
                    </button>
                {/* <main>
                    <h1>React Modal</h1>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <div>
                            <div>
                                <label>Email</label>
                                <input type="text" name="username" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" name="password" />
                            </div>
                            <div>
                                <button>Login</button>
                            </div>
                        </div>
                    </Modal>
                    <button type="button" onClick={this.showModal}>
                        open
                    </button>
                </main> */}
            </div>
        )
    }
}
export default Dashboard;