import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div className="col-auto">
                <div className="border border-success text-center p-2 rounded">{this.props.time}</div>
            </div>
        )
    }
}
