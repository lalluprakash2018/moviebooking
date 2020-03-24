import React, { Component } from 'react';

export class DrawGrid extends Component {
    onClickSeat(seat) {
        this.props.onClickData(seat);
    }
    render() {
        return (
            <div>
                <div style={{display:'grid', gridTemplateColumns:`repeat(${this.props.left}, 50px)`}} className="seatContainer">
                    { this.props.seat.map( row =>
                        <div
                            className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                            key={row} 
                            onClick = {e => this.onClickSeat(row)}>{row}
                        </div>) 
                    }
                </div>
            </div>
        )
    }
}

export default DrawGrid;
