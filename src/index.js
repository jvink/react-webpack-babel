import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import registerServiceworker from './registerServiceworker';

const main = document.getElementById('main');
ReactDOM.render(<Main />, main);

registerServiceworker();
