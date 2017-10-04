import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="container">
    <App />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
