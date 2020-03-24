import React, { Component } from 'react';
import DrawGrid from './DrawGrid';
import '../DrawLayout.css';

class DrawLayout extends Component {
    constructor(props) {
        console.log(props.layoutNum);
        super(props)
    
        this.state = {
             seat:props.seat,
             available:props.available
        }
    }
    
    render() {
        var start=0,end=this.props.left * this.props.row;
        return (
            <div className="grid-container" style={{gridTemplateColumns: `auto ${this.props.middle ? "auto" : ''} auto`}}>
                <div style={{width:`${this.props.left * 51 }px`}} className="grid-item">
                    <DrawGrid 
                        seat = { this.state.seat.slice(start,end) }
                        available = { this.state.available }
                        reserved = { this.props.reserved }
                        onClickData = { this.props.onClickData.bind(this) }
                        numofseats ={this.props.left * this.props.row}
                        left={this.props.left}
                    />
                </div>
                <div style={this.props.middle?{ width:`${this.props.middle * 51 }px`}:{display:'none'}} className="grid-item">
                        <DrawGrid 
                            seat = { this.state.seat.slice(end,end+this.props.middle * this.props.row) }
                            available = { this.state.available }
                            reserved = { this.props.reserved }
                            onClickData = { this.props.onClickData.bind(this) }
                            numofseats ={this.props.middle * this.props.row}
                            left={this.props.middle}
                        />
                </div>
                <div style={{width:`${this.props.right * 51 }px`}} className="grid-item">
                    <DrawGrid 
                        seat = { this.state.seat.slice(this.props.middle?end+this.props.middle * this.props.row:end,this.state.seat.length) }
                        available = { this.state.available }
                        reserved = { this.props.reserved }
                        onClickData = { this.props.onClickData.bind(this) }
                        numofseats ={this.props.right * this.props.row}
                        left={this.props.right}
                    />
                </div>
            </div>
        )
    }
}

export default DrawLayout;
