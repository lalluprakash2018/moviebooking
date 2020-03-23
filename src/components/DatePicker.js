import React, { Component } from 'react';
import { now } from 'moment';

export class DatePicker extends Component {
    render() {
        return (
            <div>
                {now}
            </div>
        )
    }
}

export default DatePicker
