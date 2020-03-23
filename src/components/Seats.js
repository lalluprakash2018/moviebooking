import React, { Component } from 'react';
import Header from './Header';
import '../Seats.css';
import DrawLayout from './DrawLayout';
// import Screen from './layout/Screen';
import Theatres from '../services/TheaterService';
import SeatArray from '../services/seats.json'

export default class Seats extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck =this.handleCheck.bind(this);
        this.state={
            SeatsData:'',
            seat: [
                'a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15',
                'b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15',
                'c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15',
                'd1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15',
                'e1','e2','e3','e4','e5','e6','e7','e8','e9','e10','e11','e12','e13','e14','e15',
                'f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15',
                'g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12','g13','g14','g15',
                'h1','h2','h3','h4','h5','h6','h7','h8','h9','h10','h11','h12','h13','h14','h15',
                'i1','i2','i3','i4','i5','i6','i7','i8','i9','i10','i11','i12','i13','i14','i15',
                'j1','j2','j3','j4','j5','j6','j7','j8','j9','j10','j11','j12','j13','j14','j15'
            ],
              seatAvailable: [
                'a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15',
                'b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15',
                'c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15',
                'd1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15',
                'e1','e2','e3','e4','e5','e6','e7','e8','e9','e10','e11','e12','e13','e14','e15',
                'f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15',
                'g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12','g13','g14','g15',
                'h1','h2','h3','h4','h5','h6','h7','h8','h9','h10','h11','h12','h13','h14','h15',
                'i1','i2','i3','i4','i5','i6','i7','i8','i9','i10','i11','i12','i13','i14','i15',
                'j1','j2','j3','j4','j5','j6','j7','j8','j9','j10','j11','j12','j13','j14','j15'
              ],
              seatReserved: [],
              price: 100,
              total: 0,
              count:0,
              start:0,
              theater:{},
              checked:true
        };
    }

    componentDidMount() {
        Theatres.getTheaters().map((item) =>{
            if(item.name === this.props.match.params.name){
                this.setState(() => ({ theater: item }));
            }
        });
    }
    handleCheck(){
        this.setState({
            checked:!this.state.checked
        });
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    startBooking(e){
        if(parseInt(this.state.count) === 0 || parseInt(this.state.count) === NaN){
            alert("Please enter the no seats......!")
        }
        else{
            this.setState({ start:e})
        }
    }

    onClickData(seat) {
        if(this.state.count && this.state.checked){
            for(let i=0;i<this.state.count;i++){
                console.log("hello")
            }
        }

        if(this.state.seatReserved.indexOf(seat) > -1 ) {
          this.setState({
            seatAvailable: this.state.seatAvailable.concat(seat),
            seatReserved: this.state.seatReserved.filter(res => res !== seat),
            total: this.state.total - this.state.price
          })
        } else {
            if(this.state.start === 0 ){
                alert("Please submit the no of seats......!")
            }
            else if(parseInt(this.state.count) > 0 && parseInt(this.state.count) <= this.state.seatReserved.length){
                alert("filled");
            }
            else{
                this.setState({
                  seatReserved: this.state.seatReserved.concat(seat),
                  seatAvailable: this.state.seatAvailable.filter(res => res !== seat),
                  total: this.state.total + this.state.price
                });
            }
        }
    }

    cacelBooking(){
        window.location.reload(false);
    }

    render() {
        console.log(this.state.SeatsData.seats)
        return (
            <div>
                <Header/>
                <div>
                    <div className="container-fluid">
                        <h1>Seat Booking</h1>
                        <div className="row mt-5">
                            <div className="col-8">
                                <div>
                                    <form>
                                        Number of seats <span className="text-danger">*</span>
                                        <input type="text" name="count" onChange={this.handleChange} disabled={this.state.start == 0 ? false : true}></input>
                                        <div className="mt-3">
                                            <buttton className="btn btn-sm btn-warning" onClick={this.startBooking.bind(this,1)}>Start booking</buttton>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="autoselect" onClick={this.handleCheck} defaultChecked={this.state.checked}/>Auto Select
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-5">
                                    <div>
                                        <DrawLayout 
                                            layoutNum = {this.state.theater.groups}
                                            left = {this.state.theater.left}
                                            middle = {this.state.theater.middle}
                                            right = {this.state.theater.right}
                                            seat = { this.state.seat }
                                            available = { this.state.seatAvailable }
                                            reserved = { this.state.seatReserved }
                                            onClickData = { this.onClickData.bind(this) }
                                            row = {this.state.theater.row}
                                        />
                                        {/* <DrawGrid 
                                            seat = { this.state.seat }
                                            available = { this.state.seatAvailable }
                                            reserved = { this.state.seatReserved }
                                            onClickData = { this.onClickData.bind(this) }
                                        />*/}
                                        {/* <Screen />  */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-dark">
                                    <div className="row ">
                                        <div className="col-4 border border-secondary">Seats</div>
                                        <div className="col-4 border border-secondary">Total Amount</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 border border-secondary">{this.state.seatReserved.length}</div>
                                        <div className="col-4 border border-secondary">{this.state.total}</div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-sm btn-danger mt-5" onClick={this.cacelBooking}>Cancel Booking</button>
                                    <button className="btn btn-sm btn-sucess mt-5" onClick={this.ConfirmBooking}>Cancel Booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
