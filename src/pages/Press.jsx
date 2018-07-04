import React, { Component } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import messages from "../data/messages";

class Press extends Component {
  constructor(props) {
    super(props);

    var data = {};
    const msg = messages[Object.keys(messages)[0]];
    Object.keys(msg).map(key => {
      if (key.startsWith("other.press.year")) data[key] = msg[key];
      return null;
    });

    this.state = {
      data: data,
      yearData: {},
      yearKey: "",
      menuIsOpen: false
    };
  }

  handleClick(yearKey) {
    var yearData = {};

    Object.keys(this.state.data).map(key => {
      if (key.startsWith(yearKey) && key.includes("item"))
        yearData[key] = this.state.data[key];
      return null;
    });

    this.setState({
      menuIsOpen: true,
      yearData: yearData,
      yearKey: yearKey
    });
  }

  render() {
    return (
      <div className="press animated fadeIn">
        <Navbar />
        <span className="shadow shadow--50" style={{ zIndex: "0" }} />
        <section className="hero--alternative -fh -fw -white">
          <div className="hero__image--alternative">
            <FormattedHTMLMessage
              id="other.press.image"
              defaultMessage="!JSON non valide"
            />
          </div>
          <div className="hero__content--alternative">
            <h1>
              <FormattedMessage
                id="other.press.title"
                defaultMessage="!JSON non valide"
              />
            </h1>
            <p>
              <FormattedMessage
                id="other.press.subtitle"
                defaultMessage="!JSON non valide"
              />
            </p>
          </div>
        </section>
        <div className="press__years">
          <ul>
            {Object.keys(this.state.data).map((key, index) => {
              if (!key.includes("item")) {
                return (
                  <li
                    key={index}
                    className="press__year"
                    onClick={() => this.handleClick(key)}
                  >
                    <FormattedHTMLMessage
                      id={key}
                      defaultMessage="!JSON non-valide"
                    />
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <div
            className={"press__menu " + (this.state.menuIsOpen ? "show" : "")}
          >
            <button
              className="navbar-toggler"
              onClick={() => this.setState({ menuIsOpen: false })}
            >
              <span className="bar bar__top" />
              <span className="bar bar__middle" />
              <span className="bar bar__bottom" />
            </button>
            <div className="press__articles" id="press__articles">
              {Object.keys(this.state.yearData).map((key, index) => {
                if(!key.includes(".text") && !key.includes(".link")) {
                  return (
                    <div className="press__article animated fadeIn" key={index}>
                      <h3 className="article__title"><FormattedHTMLMessage id={key} defaultMessage="!JSON non-valide" /></h3>
                      <p className="article__description"><FormattedHTMLMessage id={key + ".text"} defaultMessage="!JSON non-valide" /></p>
                      <a type="button" className="article__button" href={this.state.yearData[key + ".link"]}>Voir l'article</a>
                    </div>
                  );
                } return null;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Press;
