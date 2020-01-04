import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import './index.scss';
import App from './App';

Moment.startPooledTimer(30000);

ReactDOM.render(<App />, document.getElementById('root'));