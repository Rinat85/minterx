import React from 'react';
import { createRoot } from 'react-dom/client';
import Moment from 'react-moment';
import './index.scss';
import App from './App';

Moment.startPooledTimer(30000);

const root = createRoot(document.getElementById('root'));
root.render(<App />);