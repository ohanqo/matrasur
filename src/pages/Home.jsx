import React, { Component } from 'react';

import Navbar from '../components/Navbar';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Navbar active="home"/>
                <p>Page d'accueil</p>
            </div>
        );
    }
}