import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import messages from "../data/messages";

export default class Footer extends Component {
  state = {
    data: messages[Object.keys(messages)[0]]
  };

  render() {
    return (
      <footer className="footer -fw -hh -bg--black">
        <div className="footer__elements -white">
          <div className="footer__element--30">
            <div className="footer__img">
              <FormattedHTMLMessage
                id="footer.image"
                defaultMessage="!JSON non valide"
              />
            </div>
            <div className="footer__tel">
              <a
                href={"tel:" + this.state.data["footer.tel"].replace(/ /g, "")}
              >
                <FormattedMessage
                  id="footer.tel"
                  defaultMessage="!JSON non valide"
                />
              </a>
            </div>
            <div className="footer__mail">
              <a href={"mailto:" + this.state.data["footer.mail"]}>
                <FormattedMessage
                  id="footer.mail"
                  defaultMessage="!JSON non valide"
                />
              </a>
            </div>
            <div className="footer__social">
              {Object.keys(this.state.data).map((item, index) => {
                if (
                  item.startsWith("footer.social.icon") &&
                  !item.endsWith(".link")
                ) {
                  return (
                    <a href={this.state.data[item + ".link"]} key={index}>
                      <FormattedHTMLMessage
                        id={item}
                        defaultMessage="!JSON non valide"
                      />
                    </a>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="footer__element">
            {Object.keys(this.state.data).map((item, index) => {
              if (item.startsWith("navbar.") && item.endsWith(".title")) {
                const title = item;
                const rootItem = title.substr(0, title.length - 6);
                var links = {};
                Object.keys(this.state.data).map(element => {
                  if (
                    element.startsWith(rootItem) &&
                    element.endsWith(".link")
                  ) {
                    links[element] = this.state.data[element];
                  }
                  return null;
                });
                return (
                  <ul className="footer__map" key={index}>
                    <li className="footer__title">
                      <FormattedMessage
                        id={title}
                        defaultMessage="!JSON non valide"
                      />
                    </li>
                    <ul className="footer__links">
                      {Object.keys(links).map((i, n) => {
                        return (
                          <li key={n}>
                            <Link to={links[i]}>
                              <FormattedMessage
                                id={i.substring(0, i.length - 5)}
                                defaultMessage="!JSON non valide"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      </footer>
    );
  }
}
