import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { IntlProvider } from 'react-intl';

import Home from './pages/Home';
import Application from './pages/Application';
import Machines from './pages/Machine';
import Entreprise from './pages/Entreprise';
import NotFound from './pages/NotFound';

import './assets/css/main.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/applications" component={Application}/>
                    <Route path="/machines" component={Machines}/>
                    <Route path="/entreprise" component={Entreprise}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
