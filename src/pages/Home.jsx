import React, { Component } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import LazyLoad from "react-lazyload";

import Navbar from "../components/Navbar";
import Cardsbanner from "../components/Cardsbanner";
import Footer from "../components/Footer";

class Home extends Component {
  componentDidMount() {
    this.props.location.searchedWord
      ? window.find(this.props.location.searchedWord)
      : window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home animated fadeIn">
        <Navbar />
        <span className="shadow" />
        <ul className="slideshow">
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
        <section className="slideshow__content -white">
          <div>
            <h2 className="slideshow__title -big">
              <FormattedMessage
                id="slideshow.title"
                defaultMessage="!JSON non valide"
              />
              <br />
              <span className="separator" />
            </h2>
          </div>
          <p className="slideshow__subtitle">
            <FormattedMessage
              id="slideshow.subtitle"
              defaultMessage="!JSON non valide"
            />
          </p>
        </section>
        <Cardsbanner />
        <LazyLoad height={200}>
          <section className="box box--bg -slanted -fh -fw -bg--blue">
            <div className="box__content container -white">
              <div className="box__title animated slideInLeft">
                <h2>
                  <span className="separator" />
                  <br />
                  <FormattedMessage
                    id="home.section-1.title"
                    defaultMessage="!JSON non valide"
                  />
                </h2>
              </div>
              <div className="box__text text-left animated slideInLeft">
                <FormattedMessage
                  id="home.section-1.text"
                  defaultMessage="!JSON non valide"
                />
              </div>
            </div>
          </section>
        </LazyLoad>
        <section className="box -fh -fw">
          <div className="box__content container -white text-right -pb-10">
            <div className="box__title">
              <h2>
                <span className="separator right" />
                <br />
                <FormattedMessage
                  id="home.section-2.title"
                  defaultMessage="!JSON non valide"
                />
              </h2>
            </div>
            <div className="box__text text-right">
              <FormattedMessage
                id="home.section-2.text"
                defaultMessage="!JSON non valide"
              />
            </div>
          </div>
        </section>
        <section className="box -fh -fw -bg--white">
          <div className="box__grids -fw">
            <div className="box__grid -bg--blue">
              <LazyLoad height={200}>
                <FormattedHTMLMessage
                  id="home.grid-1.image"
                  defaultMessage="!JSON non valide"
                />
              </LazyLoad>
            </div>
            <div className="box__grid">
              <div className="box__border box__border--noleft -p-10">
                <h4 className="animated slideInRight">
                  <FormattedMessage
                    id="home.grid-1.text"
                    defaultMessage="!JSON non valide"
                  />
                </h4>
              </div>
            </div>
            <div className="box__grid">
              <div className="box__border box__border--noright -p-10">
                <h4 className="animated slideInLeft">
                  <FormattedMessage
                    id="home.grid-2.text"
                    defaultMessage="!JSON non valide"
                  />
                </h4>
              </div>
            </div>
            <div className="box__grid -bg--blue">
              <LazyLoad height={200}>
                <FormattedHTMLMessage
                  id="home.grid-2.image"
                  defaultMessage="!JSON non valide"
                />
              </LazyLoad>
            </div>
            <div className="box__grid -bg--blue">
              <LazyLoad height={200}>
                <FormattedHTMLMessage
                  id="home.grid-3.image"
                  defaultMessage="!JSON non valide"
                />
              </LazyLoad>
            </div>
            <div className="box__grid">
              <div className="box__border box__border--noleft -p-10">
                <h4 className="animated slideInRight">
                  <FormattedMessage
                    id="home.grid-3.text"
                    defaultMessage="!JSON non valide"
                  />
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="contact -fh -fw">
          <div className="contact__container container -pt-10 -pb-10">
            <div className="box__title -white">
              <h2>
                <FormattedMessage
                  id="contact.title"
                  defaultMessage="!JSON non valide"
                />
              </h2>
            </div>
            <div className="contact__cards">
              <div className="contact__card">
                <div className="contact__shortcut">
                  <div className="contact__image">
                    <LazyLoad height={200}>
                      <FormattedHTMLMessage
                        id="contact.img-1"
                        defaultMessage="!JSON non valide"
                      />
                    </LazyLoad>
                  </div>
                  <div className="contact__content">
                    <div className="contact__title">
                      <FormattedMessage
                        id="contact.title-1"
                        defaultMessage="!JSON non valide"
                      />
                    </div>
                    <div className="contact__subtitle">
                      <LazyLoad height={200}>
                        <FormattedHTMLMessage
                          id="contact.subtitle-1"
                          defaultMessage="+33 1 61 61 65 65 <br/> info@matrasurcomposites.com"
                        />
                      </LazyLoad>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__shortcut">
                  <div className="contact__image">
                    <LazyLoad height={200}>
                      <FormattedHTMLMessage
                        id="contact.img-2"
                        defaultMessage="!JSON non valide"
                      />
                    </LazyLoad>
                  </div>
                  <div className="contact__content">
                    <div className="contact__title">
                      <FormattedMessage
                        id="contact.title-2"
                        defaultMessage="!JSON non valide"
                      />
                    </div>
                    <div className="contact__subtitle">
                      <LazyLoad height={200}>
                        <FormattedHTMLMessage
                          id="contact.subtitle-2"
                          defaultMessage="+33 1 61 61 65 67 <br/> sav@matrasurcomposites.com"
                        />
                      </LazyLoad>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__shortcut">
                  <div className="contact__image">
                    <LazyLoad height={200}>
                      <FormattedHTMLMessage
                        id="contact.img-3"
                        defaultMessage="!JSON non valide"
                      />
                    </LazyLoad>
                  </div>
                  <div className="contact__content">
                    <div className="contact__title">
                      <FormattedMessage
                        id="contact.title-3"
                        defaultMessage="!JSON non valide"
                      />
                    </div>
                    <div className="contact__subtitle">
                      <LazyLoad height={200}>
                        <FormattedHTMLMessage
                          id="contact.subtitle-3"
                          defaultMessage="!JSON non valide"
                        />
                      </LazyLoad>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__shortcut">
                  <div className="contact__image">
                    <LazyLoad height={200}>
                      <FormattedHTMLMessage
                        id="contact.img-4"
                        defaultMessage="!JSON non valide"
                      />
                    </LazyLoad>
                  </div>
                  <div className="contact__content">
                    <div className="contact__title">
                      <FormattedMessage
                        id="contact.title-4"
                        defaultMessage="!JSON non valide"
                      />
                    </div>
                    <div className="contact__subtitle">
                      <LazyLoad height={200}>
                        <FormattedMessage
                          id="contact.subtitle-4"
                          defaultMessage="!JSON non valide"
                        />
                      </LazyLoad>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <LazyLoad height={200}>
            <iframe
              title="Matrasur sur Google Maps"
              className="map__frame -hh -fw"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2640.0650562825963!2d2.451039355819703!3d48.57030276982973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ed9c60e674cbbcd!2sMatrasur+Composites!5e0!3m2!1sfr!2sfr!4v1411396527839"
              frameBorder="0"
            />
          </LazyLoad>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
