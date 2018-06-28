import React, { Component } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
//import LazyLoad from "react-lazyload";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import messages from "../data/messages";

class International extends Component {
  state = { data: messages[Object.keys(messages)[0]] };

  componentDidMount() {
    this.props.location.searchedWord
      ? window.find(this.props.location.searchedWord)
      : window.scrollTo(0, 0);
  }

  renderItems() {
    return Object.keys(this.state.data).map((item, index) => {
      if (
        item.startsWith("other.international") &&
        item.includes(".item") &&
        !item.includes(".subitem")
      ) {
        return (
          <div className="internationalContact__country" key={index}>
            <h4 className="internationalContact__title">
              <FormattedHTMLMessage
                id={item}
                defaultMessage="!JSON non-valide"
              />
            </h4>
            {this.renderContactByCountry(item)}
          </div>
        );
      }
      return null;
    });
  }

  renderContactByCountry(country) {
    return Object.keys(this.state.data).map((item, index) => {
      if (item.startsWith(country) && item.includes("subitem")) {
        return (
          <p className="internationalContact__item" key={index}>
            <FormattedHTMLMessage id={item} defaultMessage="!JSON non-valide" />
          </p>
        );
      }
      return null;
    });
  }

  render() {
    return (
      <div className="international animated fadeIn">
        <Navbar />
        <span className="shadow shadow--50" style={{ zIndex: "0" }} />
        <section className="hero--alternative -fh -fw -white">
          <div className="hero__image--alternative">
            <FormattedHTMLMessage
              id="other.international.image"
              defaultMessage="!JSON non valide"
            />
          </div>
          <div className="hero__content--alternative">
            <h1>
              <FormattedMessage
                id="other.international.title"
                defaultMessage="!JSON non valide"
              />
            </h1>
            <p>
              <FormattedMessage
                id="other.international.subtitle"
                defaultMessage="!JSON non valide"
              />
            </p>
          </div>
        </section>
        <section className="internationalContact -bg--white -fh">
          {this.renderItems()}
        </section>
        <Footer />
      </div>
    );
  }
}

export default International;
