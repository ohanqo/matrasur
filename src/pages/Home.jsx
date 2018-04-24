import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Cardsbanner from '../components/Cardsbanner';
import Footer from '../components/Footer';

export default class Home extends Component {
    render() {
        return (
            <div className="o-home">
                <Navbar active="home" />
                <span className="a-shadow"></span>
                <ul className="m-slideshow">
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
                <div className="m-slideshow__content -white">
                    <div><h2 className="a-title -big">Lorem ipsum <br /><span className="a-sep"></span></h2></div>
                    <p className="a-subtitle">Ponderum nec nullas arta lapsantibus ponderum et nullas ad nostri plantis consternuntur eos dumos vertices.</p>
                </div>
                <Cardsbanner />
                <div className="m-box m-box__bg -slanted -fh -fw -bg--blue">
                    <div className="m-box__content container -white text-center">
                        <div className="m-box__content--title">Notre histoire</div>
                        <div className="m-box__content--text text-justify">
                            Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse.
                        </div>
                    </div>
                </div>
                <div className="m-box -fh -fw">
                    <div className="m-box__content container -white text-center">
                        <div className="m-box__content--title">Notre triple vocation</div>
                        <div className="m-box__content--text text-justify">
                            Matrasur Composites est à la fois distributeur, constructeur et intégrateur de systèmes dans une variété de process couvrant la projection, la coulée/injection RTM, la projection PU, le thermoformage, parmi d’autres. Epaulée par un bureau d’études et d’ingénierie, Matrasur Composites est en mesure de proposer des solutions manuelles, en automatique ou robotisées.
                        </div>
                    </div>
                </div>
                <div className="m-contact -fh -fw -bg--white">
                    <div className="container text-center">
                        <div className="m-contact__title">Pour nous contacter</div>
                        <div className="m-contact__columns">
                            <div className="m-contact__column">
                                <div className="m-contact__column--title">Service commercial</div>
                                <div className="m-contact__column--text"><i className="fas fa-phone"></i> +33 1 61 61 65 65</div>
                                <div className="m-contact__column--text"><i className="fas fa-fax"></i> +33 1 61 61 65 66</div>
                                <div className="m-contact__column--text"><i className="fas fa-envelope"></i> info@matrasurcomposites.com</div>
                            </div>
                            <div className="m-contact__column">
                                <div className="m-contact__column--title">Service après-ventes</div>
                                <div className="m-contact__column--text"><i className="fas fa-phone"></i> +33 1 61 61 65 67</div>
                                <div className="m-contact__column--text"><i className="fas fa-fax"></i> +33 1 61 61 65 66</div>
                                <div className="m-contact__column--text"><i className="fas fa-envelope"></i> sav@matrasurcomposites.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-map">
                    <iframe title="Matrasur sur Google Maps" className="m-map__frame -hh -fw" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2640.0650562825963!2d2.451039355819703!3d48.57030276982973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ed9c60e674cbbcd!2sMatrasur+Composites!5e0!3m2!1sfr!2sfr!4v1411396527839" frameBorder="0"></iframe>" 
                </div>
                <Footer/>
            </div>
        );
    }
}
