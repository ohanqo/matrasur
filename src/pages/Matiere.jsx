import React, { Component } from 'react';

import Navbar from '../components/Navbar';

export default class Matiere extends Component {
    render() {
        return(
            <div>
                <Navbar active="application"/>
                <p>Applications</p>
            </div>
        );
    }
}