import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import Navbar from "../components/Navbar";
import Cardsbanner from "../components/Cardsbanner";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="o-home">
        <Navbar active="home" />
        <span className="a-shadow" />
        <ul className="m-slideshow">
          <li>
            <span />
          </li>
          <li>
            <span />
          </li>
          <li>
            <span />
          </li>
        </ul>
        <div className="m-slideshow__content -white">
          <div>
            <h2 className="a-title -big">
              <FormattedMessage
                id="slideshow.title"
                defaultMessage="Message par défaut"
              />
              <br />
              <span className="a-sep" />
            </h2>
          </div>
          <p className="a-subtitle">
            Ponderum nec nullas arta lapsantibus ponderum et nullas ad nostri
            plantis consternuntur eos dumos vertices.
          </p>
        </div>
        <Cardsbanner />
        <div className="m-box m-box__bg -slanted -fh -fw -bg--blue">
          <div className="m-box__content container -white">
            <div className="m-box__content--title">
              <h2>
                <span className="a-sep" />
                <br />Notre histoire
              </h2>
            </div>
            <div className="m-box__content--text text-justify">
              Sin autem ad adulescentiam perduxissent, dirimi tamen interdum
              contentione vel uxoriae condicionis vel commodi alicuius, quod
              idem adipisci uterque non posset. Quod si qui longius in amicitia
              provecti essent, tamen saepe labefactari, si in honoris
              contentionem incidissent; pestem enim nullam maiorem esse
              amicitiis quam in plerisque pecuniae cupiditatem, in optimis
              quibusque honoris certamen et gloriae; ex quo inimicitias maximas
              saepe inter amicissimos exstitisse.
            </div>
          </div>
        </div>
        <div className="m-box -fh -fw">
          <div className="m-box__content container -white text-right">
            <div className="m-box__content--title">
              <h2>
                <span className="a-sep right" />
                <br />Notre triple vocation
              </h2>
            </div>
            <div className="m-box__content--text text-justify">
              Matrasur Composites est à la fois distributeur, constructeur et
              intégrateur de systèmes dans une variété de process couvrant la
              projection, la coulée/injection RTM, la projection PU, le
              thermoformage, parmi d’autres. Epaulée par un bureau d’études et
              d’ingénierie, Matrasur Composites est en mesure de proposer des
              solutions manuelles, en automatique ou robotisées.
            </div>
          </div>
        </div>
        <hr />
        <div className="m-contact -fh -fw">
          <div className="m-contact__container container">
            <div className="m-box__content--title -white">
              <h2>Contactez nous</h2>
            </div>
            <div className="m-contact__cards row">
              <div className="m-contact__card col-sm-12 col-md-6">
                <a href="" className="m-contact__shortcut">
                  <div className="m-contact__image">
                    <FormattedHTMLMessage
                      id="contact.img-1"
                      defaultMessage="Img"
                    />
                  </div>
                  <div className="m-contact__content">
                    <div className="m-contact__title">
                      <FormattedMessage
                        id="contact.title-1"
                        defaultMessage="Img"
                      />
                    </div>
                    <div className="m-contact__subtitle">
                      <FormattedHTMLMessage
                        id="contact.subtitle-1"
                        defaultMessage="+33 1 61 61 65 65 <br/> info@matrasurcomposites.com"
                      />
                    </div>
                    <div className="m-contact__button" />
                  </div>
                </a>
              </div>
              <div className="m-contact__card col-sm-12 col-md-6">
                <a href="" className="m-contact__shortcut">
                  <div className="m-contact__image">
                    <FormattedHTMLMessage
                      id="contact.img-2"
                      defaultMessage="Img"
                    />
                  </div>
                  <div className="m-contact__content">
                    <div className="m-contact__title">
                      <FormattedMessage
                        id="contact.title-2"
                        defaultMessage="Img"
                      />
                    </div>
                    <div className="m-contact__subtitle">
                      <FormattedHTMLMessage
                        id="contact.subtitle-2"
                        defaultMessage="+33 1 61 61 65 67 <br/> sav@matrasurcomposites.com"
                      />
                    </div>
                    <div className="m-contact__button" />
                  </div>
                </a>
              </div>
              <div className="m-contact__card col-sm-12 col-md-6">
                <a href="" className="m-contact__shortcut">
                  <div className="m-contact__image">
                    <FormattedHTMLMessage
                      id="contact.img-3"
                      defaultMessage="Img"
                    />
                  </div>
                  <div className="m-contact__content">
                    <div className="m-contact__title">
                      <FormattedMessage
                        id="contact.title-3"
                        defaultMessage="Img"
                      />
                    </div>
                    <div className="m-contact__subtitle" />
                    <div className="m-contact__button" />
                  </div>
                </a>
              </div>
              <div className="m-contact__card col-sm-12 col-md-6">
                <a href="" className="m-contact__shortcut">
                  <div className="m-contact__image">
                    <FormattedHTMLMessage
                      id="contact.img-4"
                      defaultMessage="Img"
                    />
                  </div>
                  <div className="m-contact__content">
                    <div className="m-contact__title">
                      <FormattedMessage
                        id="contact.title-4"
                        defaultMessage="Img"
                      />
                    </div>
                    <div className="m-contact__subtitle" />
                    <div className="m-contact__button" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="m-map">
          <iframe
            title="Matrasur sur Google Maps"
            className="m-map__frame -hh -fw"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2640.0650562825963!2d2.451039355819703!3d48.57030276982973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ed9c60e674cbbcd!2sMatrasur+Composites!5e0!3m2!1sfr!2sfr!4v1411396527839"
            frameBorder="0"
          />"
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null)(Home));
