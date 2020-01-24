import React from 'react';
import ReactDOM from 'react-dom';
import './image_gallery.scss'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/super_smash_4_1_by_pokemon_diamond-d7zxu6d.ttf';
import './fonts/GothamBlackRegular.ttf';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
