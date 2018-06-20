import React, { Component } from "react";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import LazyLoad from "react-lazyload";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import messages from "../data/messages";

class Documentation extends Component {
  componentDidMount() {
    this.props.location.searchedWord
      ? window.find(this.props.location.searchedWord)
      : window.scrollTo(0, 0);
  }
  render() {
    const data = messages[Object.keys(messages)[0]];
    return (
      <div className="documentation animated fadeIn">
        <Navbar />
        <span className="shadow shadow--50" style={{ zIndex: "0" }} />
        <section className="hero--alternative -fh -fw -white">
          <div className="hero__image--alternative">
            <FormattedHTMLMessage
              id="other.documentation.image"
              defaultMessage="!JSON non valide"
            />
          </div>
          <div className="hero__content--alternative">
            <h1>
              <FormattedMessage
                id="other.documentation.title"
                defaultMessage="!JSON non valide"
              />
            </h1>
            <p>
              <FormattedMessage
                id="other.documentation.subtitle"
                defaultMessage="!JSON non valide"
              />
            </p>
          </div>
        </section>
        {Object.keys(data).map((item, index) => {
          if (
            item.startsWith("other.documentation.section") &&
            item.endsWith(".title")
          ) {
            const title = item;
            const rootSection = title.substr(0, title.length - 6);
            return (
              <section className="doc__section -hh -fw" key={index}>
                <h2>
                  <FormattedMessage
                    id={title}
                    defaultMessage="!JSON non valide"
                  />
                </h2>
                <div className="doc__cards--doc">
                  {Object.keys(data).map((i, e) => {
                    if (i.startsWith(rootSection) && i.endsWith(".name")) {
                      return (
                        <a href={data[i.replace("name", "link")]} key={e}>
                          <div className="doc__card--doc">
                            <LazyLoad height={200} once>
                              <FormattedHTMLMessage
                                id={i.replace("name", "image")}
                                defaultMessage="!JSON non valide"
                              />
                            </LazyLoad>
                            <div className="doc__cardContent">
                              <h4>
                                <FormattedMessage
                                  id={i}
                                  defaultMessage="!JSON non valide"
                                />
                              </h4>
                              <p>
                                <FormattedMessage
                                  id={i.replace("name", "description")}
                                />
                              </p>
                            </div>
                          </div>
                        </a>
                      );
                    } else return null;
                  })}
                </div>
              </section>
            );
          } else return null;
        })}
        <Footer />
      </div>
    );
  }
}

export default Documentation;
