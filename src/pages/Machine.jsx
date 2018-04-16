import React, { Component } from 'react';

import Navbar from '../components/Navbar';

export default class Machine extends Component {
    render() {
        return(
            <div>
                <Navbar active="machines"/>
                <p>Machines</p>
            </div>
        );
    }
}