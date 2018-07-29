import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const homePage = () => (
    
    <div>
        <p> Home Page </p>
    </div>
);
const routes = (

    <BrowserRouter>
        <Route path='/' component = {homePage}/>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
