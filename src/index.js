import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Widget = document.getElementById('first-widget')

ReactDOM.render(
  <React.StrictMode>
    <App domElement={Widget}/>
  </React.StrictMode>,
  Widget
);
