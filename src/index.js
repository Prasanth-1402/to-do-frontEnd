import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Logo from './todo_image.png';

ReactDOM.render(
  <>
    <img src={Logo} className="logo" alt="logo" />
    <App />
  </>,
  document.getElementById('root')
);
