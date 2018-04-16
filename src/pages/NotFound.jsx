import React, { Component } from 'react';

import Navbar from '../components/Navbar';

export default class NotFound extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <p>Not found</p>
            </div>
        );
    }
}