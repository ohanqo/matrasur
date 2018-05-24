import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import messages from "../data/messages";

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
            if (key.startsWith(pageRoot) && key.includes(param)) {
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

  render() {
    if (Object.keys(this.state.items).length === 0) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="global">
          <Navbar />
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
                return (
                  <section className="global__section -fw -hh" key={index}>
                    <FormattedHTMLMessage
                      id={sectionItem + ".image"}
                      defaultMessage="!JSON non-valide"
                    />
                    <div className="global__text">
                      <h4>
                        <FormattedMessage
                          id={item}
                          defaultMessage="!JSON non-valide"
                        />
                      </h4>
                      <p>
                        <FormattedMessage
                          id={sectionItem + ".text"}
                          defaultMessage="!JSON non-valide"
                        />
                      </p>
                    </div>
                  </section>
                );
              } else return null;
            })}
          </section>
          <Footer />
        </div>
      );
    }
  }
}
