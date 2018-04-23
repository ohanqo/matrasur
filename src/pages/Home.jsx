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
                <div className="m-box m-box__bg -slanted -fh -fw -bg--blue">
                    <div className="m-box__content container -white text-center">
                        <div className="m-box__content--title">Notre histoire</div>
                        <div className="m-box__content--text text-justify">
                            Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse.
                        </div>
                    </div>
                </div>
                <div className="m-box -slanted -fh -fw">
                    <div className="m-box__content container -white text-center">
                        <div className="m-box__content--title">Notre triple vocation</div>
                        <div className="m-box__content--text text-justify">
                            Matrasur Composites est à la fois distributeur, constructeur et intégrateur de systèmes dans une variété de process couvrant la projection, la coulée/injection RTM, la projection PU, le thermoformage, parmi d’autres. Epaulée par un bureau d’études et d’ingénierie, Matrasur Composites est en mesure de proposer des solutions manuelles, en automatique ou robotisées.
                        </div>
                    </div>
                </div>
                <div className="m-box -bg--white -fh -fw">
                    <div className="m-box__content container text-center">
                        <div className="m-box__content--title">Notre triple vocation</div>
                        <div className="m-box__content--text text-justify">
                            Matrasur Composites est à la fois distributeur, constructeur et intégrateur de systèmes dans une variété de process couvrant la projection, la coulée/injection RTM, la projection PU, le thermoformage, parmi d’autres. Epaulée par un bureau d’études et d’ingénierie, Matrasur Composites est en mesure de proposer des solutions manuelles, en automatique ou robotisées.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}