import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Register from './components/Register';
import Theaters from './components/Theaters';
import Seats from './components/Seats';
import Admin from './components/Admin';
import ViewTheaters from './components/ViewTheaters';
import SeatLayout from './components/SeatLayout';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/signup' component={SignUp} />
        <Route path='/register' component={Register}/>
        <Route path='/theater/:id' component={Theaters}/>
        <Route path='/reserve/:time/:name' component={Seats}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/theaterlist' component={ViewTheaters} />
        <Route path='/seatlayout/:name' component={SeatLayout} />
      </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
