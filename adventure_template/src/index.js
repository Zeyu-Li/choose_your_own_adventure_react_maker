import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Game from './Game'
// WARNING: don't touch the index, go to the Game.js to do modifications

ReactDOM.render(
	<Game key="gamer1" />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
