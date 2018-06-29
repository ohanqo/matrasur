import React, { Component } from "react";
import { FormattedHTMLMessage } from "react-intl";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import messages from "../data/messages";

export default class Mention extends Component {
  state = {
    data: messages[Object.keys(messages)[0]]
  };

  componentDidMount() {
    if(window.find) {
      this.props.location.searchedWord
      ? window.find(this.props.location.searchedWord)
      : window.scrollTo(0, 0);
    }
  }

  displayContent() {
    return Object.keys(this.state.data).map((value, index) => {
      if (value.includes("other.legal") && value.endsWith(".name")) {
        return (
          <div className="legals__item container" key={index}>
            <h3 className="legals__name">
              <FormattedHTMLMessage
                id={value}
                defaultMessage="!JSON non-valide"
              />
            </h3>
            <p className="legals__text">
              <FormattedHTMLMessage
                id={value.replace(".name", ".text")}
                defaultMessage="!JSON non-valide"
              />
            </p>
          </div>
        );
      } else return null;
    });
  }

  render() {
    return (
      <div className="legals">
        <Navbar />
        <h1 className="legals__title">
          <FormattedHTMLMessage id="other.legal.title" defaultMessage="!JSON non-valide" />
        </h1>
        <div className="legals__content">{this.displayContent()}</div>
        <Footer />
      </div>
    );
  }
}
