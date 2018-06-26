import React, { Component } from "react";
import { FormattedHTMLMessage } from "react-intl";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class NotFound extends Component {
  render() {
    return (
      <div className="404">
        <Navbar />
        <section className="hero--alternative -fh -fw -white">
          <div className="hero__image--alternative">
            <FormattedHTMLMessage
              id="404.image"
              defaultMessage="!JSON non valide"
            />
          </div>
          <div className="hero__content--alternative">
            <h1>
              <FormattedHTMLMessage
                id="404.title"
                defaultMessage="!JSON non valide"
              />
            </h1>
            <p>
              <FormattedHTMLMessage
                id="404.subtitle"
                defaultMessage="!JSON non valide"
              />
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
