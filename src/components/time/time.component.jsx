import React, { Component } from 'react';
import Moment from 'react-moment';

export default class Time extends Component {
    render() {
        return (
            <Moment format="hh:mm" local className="time" />
        )
    }
}
