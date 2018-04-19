import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Cardsbanner from '../components/Cardsbanner';

export default class Home extends Component {
    render() {
        return(
            <div className="o-home">
                <Navbar active="home"/>
                <span className="a-shadow"></span>
                <ul className="m-slideshow">
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
                <div className="m-slideshow__content -white">
                    <div><h2 className="a-title -big">Lorem ipsum <br/><span className="a-sep"></span></h2></div>
                    <p className="a-subtitle">Ponderum nec nullas arta lapsantibus ponderum et nullas ad nostri plantis consternuntur eos dumos vertices.</p>
                </div>
                <Cardsbanner/>
            </div>
        );
    }
}