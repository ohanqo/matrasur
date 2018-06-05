import React, { Component } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import LazyLoad from "react-lazyload";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const International = () => {
  window.scrollTo(0, 0);
  return (
    <div className="international animated fadeIn">
      <Navbar />
      <span className="a-shadow a-shadow--50" style={{zIndex: "0"}}></span>
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
      <Footer />
    </div>
  );
};

export default International;
