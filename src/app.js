import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/general.less';

// TODO: remove this temporary test
fetch('https://api.myjson.com/bins/vajmu')
.then(response => response.json())
.then(json => {console.log(json)});

ReactDOM.render(<AppRouter />, document.getElementById('app'));
