import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import LazyLoad from "react-lazyload";

import Navbar from "../components/Navbar";
import Cardsbanner from "../components/Cardsbanner";
import Footer from "../components/Footer";

class Home extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="o-home animated fadeIn">
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
        <section className="m-slideshow__content -white">
          <div>
            <h2 className="a-title -big">
              <FormattedMessage
                id="slideshow.title"
                defaultMessage="!JSON non valide"
              />
              <br />
              <span className="a-sep" />
            </h2>
          </div>
          <p className="a-subtitle">
            <FormattedMessage
              id="slideshow.subtitle"
              defaultMessage="!JSON non valide"
            />
          </p>
        </section>
        <Cardsbanner />
        <LazyLoad height={200}>
          <section className="m-box m-box__bg -slanted -fh -fw -bg--blue">
            <div className="m-box__content container -white">
              <div className="m-box__content--title animated slideInLeft">
                <h2>
                  <span className="a-sep" />
                  <br />
                  <FormattedMessage
                    id="home.section-1.title"
                    defaultMessage="!JSON non valide"
                  />
                </h2>
              </div>
              <div className="m-box__content--text text-justify animated slideInLeft">
                <FormattedMessage
                  id="home.section-1.text"
                  defaultMessage="!JSON non valide"
                />
              </div>
            </div>
          </section>
        </LazyLoad>
        <section className="m-box -fh -fw">
          <div className="m-box__content container -white text-right -pb-10">
            <div className="m-box__content--title">
              <h2>
                <span className="a-sep right" />
                <br />
                <FormattedMessage
                  id="home.section-2.title"
                  defaultMessage="!JSON non valide"
                />
              </h2>
            </div>
            <div className="m-box__content--text text-justify">
              <FormattedMessage
                id="home.section-2.text"
                defaultMessage="!JSON non valide"
              />
            </div>
          </div>
        </section>
        <section className="m-box -fh -fw -bg--white">
          <div className="m-box__grids -fw">
            <div className="item -bg--blue">
              <LazyLoad height={200}>
                <FormattedHTMLMessage
                  id="home.grid-1.image"
                  defaultMessage="!JSON non valide"
                />
              </LazyLoad>
            </div>
            <div className="item">
              <div className="item__box box-child">
                <div className="item__box--text -p-10">
                  <h4>
                    <FormattedMessage
                      id="home.grid-1.text"
                      defaultMessage="!JSON non valide"
                    />
                  </h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item__box box-child--reverse">
                <div className="item__box--text -p-10">
                  <h4>
                    <FormattedMessage
                      id="home.grid-2.text"
                      defaultMessage="!JSON non valide"
                    />
                  </h4>
                </div>
              </div>
            </div>
            <div className="item -bg--blue">
              <LazyLoad height={200}>
                <FormattedHTMLMessage
                  id="home.grid-2.image"
                  defaultMessage="!JSON non valide"
                />
              </LazyLoad>
            </div>
            <div className="item -bg--blue">
              <LazyLoad height={200}>
                <FormattedHTMLMessage
                  id="home.grid-3.image"
                  defaultMessage="!JSON non valide"
                />
              </LazyLoad>
            </div>
            <div className="item">
              <div className="item__box box-child">
                <div className="item__box--text -p-10">
                  <h4>
                    <FormattedMessage
                      id="home.grid-3.text"
                      defaultMessage="!JSON non valide"
                    />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-contact -fh -fw">
          <div className="m-contact__container container -pt-10 -pb-10">
            <div className="m-box__content--title -white">
              <h2>
                <FormattedMessage
                  id="contact.title"
                  defaultMessage="!JSON non valide"
                />
              </h2>
            </div>
            <div className="m-contact__cards row">
              <div className="m-contact__card col-sm-12 col-md-6">
                <a href="" className="m-contact__shortcut">
                  <div className="m-contact__image">
                    <LazyLoad height={200}>
                      <FormattedHTMLMessage
                        id="contact.img-1"
                        defaultMessage="Img"
                      />
                    </LazyLoad>
                  </div>
                  <div className="m-contact__content">
                    <div className="m-contact__title">
                      <FormattedMessage
                        id="contact.title-1"
                        defaultMessage="Img"
                      />
                    </div>
                    <div className="m-contact__subtitle">
                      <LazyLoad height={200}>
                        <FormattedHTMLMessage
                          id="contact.subtitle-1"
                          defaultMessage="+33 1 61 61 65 65 <br/> info@matrasurcomposites.com"
                        />
                      </LazyLoad>
                    </div>
                  </div>
                </a>
              </div>
              <div className="m-contact__card col-sm-12 col-md-6">
                <a href="" className="m-contact__shortcut">
                  <div className="m-contact__image">
                    <LazyLoad height={200}>
                      <FormattedHTMLMessage
                        id="contact.img-2"
                        defaultMessage="Img"
                      />
                    </LazyLoad>
                  </div>
                  <div className="m-contact__content">
                    <div className="m-contact__title">
                      <FormattedMessage
                        id="contact.title-2"
                        defaultMessage="Img"
                      />
                    </div>
                    <div className="m-contact__subtitle">
                      <LazyLoad height={200}>
                        <FormattedHTMLMessage
                          id="contact.subtitle-2"
                          defaultMessage="+33 1 61 61 65 67 <br/> sav@matrasurcomposites.com"
                        />
                      </LazyLoad>
                    </div>
                  </div>
                </a>
              </div>
              <div className="m-contact__card col-sm-12 col-md-6">
                <a href="" className="m-contact__shortcut">
                  <div className="m-contact__image">
                    <LazyLoad height={200}>
                      <FormattedHTMLMessage
                        id="contact.img-3"
                        defaultMessage="Img"
                      />
                    </LazyLoad>
                  </div>
                  <div className="m-contact__content">
                    <div className="m-contact__title">
                      <FormattedMessage
                        id="contact.title-3"
                        defaultMessage="Img"
                      />
                    </div>
                    <div className="m-contact__subtitle">
                      <LazyLoad height={200}>
                        <FormattedHTMLMessage
                          id="contact.subtitle-3"
                          defaultMessage="!JSON non valide"
                        />
                      </LazyLoad>
                    </div>
                  </div>
                </a>
              </div>
              <div className="m-contact__card col-sm-12 col-md-6">
                <a href="" className="m-contact__shortcut">
                  <div className="m-contact__image">
                    <LazyLoad height={200}>
                      <FormattedHTMLMessage
                        id="contact.img-4"
                        defaultMessage="Img"
                      />
                    </LazyLoad>
                  </div>
                  <div className="m-contact__content">
                    <div className="m-contact__title">
                      <FormattedMessage
                        id="contact.title-4"
                        defaultMessage="Img"
                      />
                    </div>
                    <div className="m-contact__subtitle" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="m-map">
          <LazyLoad height={200}>
            <iframe
              title="Matrasur sur Google Maps"
              className="m-map__frame -hh -fw"
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

export default withRouter(connect(null)(Home));
