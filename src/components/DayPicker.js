import React, { Component } from 'react';
import TheaterService from '../services/TheaterService';
import DayService from '../services/DayService';

class DayPicker extends Component {
    constructor(props) {
        super(props);
        var days_data = DayService.getDays();
         var theaters =TheaterService.getTheaters();
        console.log(days_data);
        console.log(theaters);
        days_data.forEach(function(day1) {
            day1.theaters = [theaters[Math.floor(Math.random() * theaters.length)], theaters[Math.floor(Math.random() * theaters.length)], theaters[Math.floor(Math.random() * theaters.length)]];
          });
        this.state = {
            // theaters: [],
            // day: []
            days: days_data,
            activeDay: 0
        };
    }
    // componentDidMount() {
    //     this.setState(() => (
    //             { 
    //                 theaters: TheaterService.getTheaters()
    //                 ,day: DayService.getDays() 
    //             }
    //         ));
    // }
    render() {
        return (
            <div className="DayPicker">
                <div className="days">
                    {this.state.days.map((day, index) =>
                        <div className={ this.getDayClasses(index) } key={ index } onClick={ this.setActiveDay.bind(this, index) }>
                    { day.letter }
                    <b>{ day.number }</b>
                    </div>
                )}
                </div>

                <div className="theaters">
                {this.state.days[this.state.activeDay].theaters.map((theater, index) =>
                    <div className="theater" key={ index }>
                    {/* <TheaterPicker theater={ theater } /> */}
                    </div>
                )}
                </div>
            </div>
        )
    }
    setActiveDay(index) {
        return this.setState({activeDay: index});
      }
    
      getDayClasses(index) {
        if(index === this.state.activeDay) {
          return 'day day--active';
        }
        else {
          return 'day';
        }
      }
}

export default DayPicker;
