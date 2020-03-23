import React, { Component } from 'react';
import TheaterService from '../services/TheaterService';
import TheaterList from './TheaterList';


class TheaterPicker extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             theaters:[],
             movie:props.movie
        };
    }
    componentDidMount() {
        TheaterService.getTheaters().map((item) =>{
            if(item.movie == parseInt(this.props.movie)){
                var newitem={
                    name:item.name,
                    time:item.times
                }
                this.setState(prevState => ({
                    theaters: [...prevState.theaters, newitem]
                }));
            }
        });
    }
    render() {
        return (
            <div className="container">
                <TheaterList theater={this.state.theaters}/>
                {/* {for (let index = 0; index < this.state.theaters.length; index++) {
                    const element = array[index];
                    {element}
                    
                }} */}
                {/* <div className="row mt-4"> */}
                    {/* <div className="col-4 text-secondary py-2">
                        <strong>{this.state.theaters.name}</strong>
                    </div> */}
                    
                    {/* <div className="col-auto">
                        <div className="border border-success text-center p-2 rounded">9:00 am</div>
                    </div>
                    <div className="col-auto">
                        <div className="border border-success text-center p-2 rounded">12:00 am</div>
                    </div>
                    <div className="col-auto">
                        <div className="border border-success text-center p-2 rounded">4:00 am</div>
                    </div>
                    <div className="col-auto">
                        <div className="border border-success text-center p-2 rounded">9:00 am</div>
                    </div>
                    <div className="col-auto">
                        <div className="border border-success text-center p-2 rounded">9:00 am</div>
                    </div> */}
                {/* </div> */}

            </div>
        )
    }
}

export default TheaterPicker;
