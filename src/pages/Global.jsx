import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import messages from "../data/messages";
import { Object } from "core-js";

export default class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: messages[Object.keys(messages)[0]],
      param: this.props.match.params.param
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params !== prevState.param) {
      const slash = "/";
      const period = ".";
      const path = nextProps.location.pathname.trim();
      const root = path.split(slash)[1];
      const param = path.split(slash)[2];
      const pageRoot = root + period;
      const itemsRoot = root + period + param;
      var items = {};

      if (param !== undefined) {
        for (var key in prevState.data) {
          if (prevState.data.hasOwnProperty(key)) {
            if (
              key.startsWith(pageRoot) &&
              key.includes(period + param + period)
            ) {
              items[key] = prevState.data[key];
            }
          }
        }
      }

      return {
        param: nextProps.match.params.param,
        items: items,
        itemsRoot: itemsRoot
      };
    } else {
      return null;
    }
  }

  componentDidMount() {
    if (window.find) {
      this.props.location.searchedWord
        ? window.find(this.props.location.searchedWord)
        : window.scrollTo(0, 0);
    }
  }

  render() {
    if (Object.keys(this.state.items).length === 0) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="global -bg--white animated fadeIn">
          <Navbar />
          <span className="shadow shadow--50" />
          <section className="hero -fw -fh">
            <FormattedHTMLMessage
              id={this.state.itemsRoot + ".image"}
              defaultMessage="! JSON Non valide"
            />
            <div className="global__header -fw">
              <h2>
                <FormattedMessage
                  id={this.state.itemsRoot + ".title"}
                  defaultMessage="! JSON non-valide"
                />
              </h2>
              <p>
                <FormattedMessage
                  id={this.state.itemsRoot + ".subtitle"}
                  defaultMessage="! JSON non-valide"
                />
              </p>
            </div>
          </section>
          <section className="global__sections">
            {Object.keys(this.state.items).map((item, index) => {
              if (item.endsWith(".name")) {
                const sectionItem = item.substr(0, item.length - 5);
                const hasPhotos =
                  sectionItem + ".photos.item-1" in this.state.items
                    ? true
                    : false;
                const hasLinks =
                  sectionItem + ".links.item-1" in this.state.items ? true : false;
                return (
                  <section className="global__section -fw -hh" key={index}>
                    <div className="global__text">
                      <h4>
                        <FormattedMessage
                          id={item}
                          defaultMessage="!JSON non-valide"
                        />
                      </h4>
                      <p>
                        <FormattedHTMLMessage
                          id={sectionItem + ".text"}
                          defaultMessage="!JSON non-valide"
                        />
                      </p>
                    </div>
                    {hasPhotos && (
                      <section className="global__photos">
                        <div className="global__grid">
                          {Object.keys(this.state.items).map((itm, idx) => {
                            if (
                              itm.includes(sectionItem) &&
                              itm.includes(".photos.") &&
                              itm.includes(".item")
                            ) {
                              return (
                                <div className="global__cell" key={idx}>
                                  <FormattedHTMLMessage
                                    id={itm}
                                    defaultMessage="!JSON non-valide"
                                  />
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </section>
                    )}
                    {hasLinks && (
                      <ul className="global__links">
                        {Object.keys(this.state.items).map((i, y) => {
                          if (
                            i.includes(sectionItem) &&
                            i.includes(".links") &&
                            i.includes(".item") &&
                            !i.endsWith(".text")
                          ) {
                            return (
                              <li className="global__link" key={y}>
                                <Link to={this.state.items[i]}>
                                  <FormattedHTMLMessage
                                    id={i + ".text"}
                                    defaultMessage="!JSON non-valide"
                                  />
                                </Link>
                              </li>
                            );
                          }
                          return null;
                        })}
                      </ul>
                    )}
                  </section>
                );
              } else return null;
            })}
          </section>
          <section className="global__sections global__sections--darker">
            <div className="global__wrapper container">
              {Object.keys(this.state.items).map((item, index) => {
                if (item.endsWith(".darker") && item.includes(".name")) {
                  return (
                    <section className="global__section--darker" key={index}>
                      <div className="global__text--darker">
                        <h4>
                          <FormattedMessage
                            id={item}
                            defaultMessage="!JSON non-valide"
                          />
                        </h4>
                        <p>
                          <FormattedHTMLMessage
                            id={item.replace("name", "text")}
                            defaultMessage="!JSON non-valide"
                          />
                        </p>
                      </div>
                    </section>
                  );
                } else return null;
              })}
            </div>
          </section>
          <Footer />
        </div>
      );
    }
  }
}
