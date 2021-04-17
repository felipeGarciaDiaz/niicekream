import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import "./components/styles/style.css";
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

