import React, { Component } from 'react';

import Navbar from '../components/Navbar';

export default class Entreprise extends Component {
    render() {
        return(
            <div>
                <Navbar active="entreprise"/>
                <p>Entreprise</p>
            </div>
        );
    }
}