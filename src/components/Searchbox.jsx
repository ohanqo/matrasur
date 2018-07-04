import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import messages from "../data/messages";

class Searchbox extends Component {
  state = {
    isOpen: false,
    userSearch: "",
    userLanguage: "fr",
    matches: {}
  };

  toggleDisplaySearchForm = this.toggleDisplaySearchForm.bind(this);
  searchValue = this.searchValue.bind(this);
  findContent = this.findContent.bind(this);

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.getElementById("searchInput").focus();
    }
  }

  toggleDisplaySearchForm() {
    this.setState({ isOpen: !this.state.isOpen, userSearch: "", matches: {} });
  }

  findContent(query) {
    //HACK
    if (window.find) {
      window.find(query);
    }
    this.toggleDisplaySearchForm();
    if (window.find) {
      window.find(query);
    }
  }

  searchValue(e) {
    var matches = {};
    const userValue = e.target.value;
    const userLanguage = this.props.lang;
    const messagesOfHisLanguage = messages[userLanguage];

    if (userValue.length > 2 && userValue !== "" && userValue !== " ") {
      for (var key in messagesOfHisLanguage) {
        if (messagesOfHisLanguage.hasOwnProperty(key)) {
          if (
            messagesOfHisLanguage[key]
              .toLowerCase()
              .includes(userValue.toLowerCase())
          ) {
            matches[key] = messagesOfHisLanguage[key];
          }
        }
      }
    }
    this.setState({
      userSearch: userValue,
      matches: matches,
      userLanguage: userLanguage
    });
  }

  render() {
    return (
      <Searchform
        toggleDisplaySearchForm={this.toggleDisplaySearchForm}
        search={this.searchValue}
        findContent={this.findContent}
        open={this.state.isOpen}
        matches={this.state.matches}
        userLanguage={this.state.userLanguage}
      />
    );
  }
}

const Searchform = props => {
  const userLanguage = props.userLanguage;
  const messagesOfHisLanguage = messages[userLanguage];

  function removeHTMLtags(keyValue) {
    if (keyValue === null || keyValue === "") return false;
    else keyValue = keyValue.toString();
    return keyValue.replace(/<[^>]*>/g, "");
  }

  return (
    <div className="searchbox">
      <button
        className="btn btn-outline-dark my-2 my-sm-0 button searchbar__button"
        onClick={props.toggleDisplaySearchForm}
      >
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="5605.991 836 16.958 16.95"
        >
          <path
            fill="#006EB9"
            data-name="Path 150"
            d="M5612.5 836a6.493 6.493 0 0 1 5.29 10.27l4.88 4.88a1.076 1.076 0 0 1-1.52 1.52l-4.88-4.88a6.5 6.5 0 1 1-3.77-11.79zm0 11a4.5 4.5 0 1 0-4.5-4.5 4.5 4.5 0 0 0 4.5 4.5z"
          />
        </svg>
      </button>
      <div
        id="modal"
        className={(props.open ? "-fade--in " : "-displayNone ") + "modal"}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <input
                type="text"
                id="searchInput"
                className="modal-title"
                placeholder=">"
                autoComplete="off"
                onChange={props.search}
              />
              <button
                type="button"
                className="close"
                onClick={props.toggleDisplaySearchForm}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {Object.keys(props.matches).map((key, index) => {
                var keyValue = props.matches[key];
                if (
                  !(
                    key.includes(".link") ||
                    key.includes(".image") ||
                    key.includes(".img") ||
                    key.startsWith("404") ||
                    key.endsWith("submenu") ||
                    (key.includes("navbar") && key.includes(".title")) ||
                    key.includes("contact.subtitle") ||
                    key.includes("other.press.years") ||
                    (key.startsWith("footer.social.icon") &&
                      !key.endsWith(".url"))
                  )
                ) {
                  if (
                    (key.includes(".subitem") && key.includes("navbar")) ||
                    key.includes("submenu.item")
                  ) {
                    return (
                      <Link
                        to={messagesOfHisLanguage[key + ".link"]}
                        key={index}
                      >
                        {removeHTMLtags(keyValue)}
                      </Link>
                    );
                  } else {
                    if (
                      key.includes("contact.") ||
                      key.includes("slideshow.") ||
                      key.includes("footer.") ||
                      key.endsWith("submenu") ||
                      key.includes("home")
                    ) {
                      if (window.location.pathname === "/") {
                        return (
                          <Link
                            to="/"
                            key={index}
                            onClick={() => {
                              props.findContent(keyValue);
                            }}
                          >
                            {removeHTMLtags(keyValue)}
                          </Link>
                        );
                      } else {
                        return (
                          <Link
                            key={index}
                            to={{
                              pathname: "/",
                              searchedWord: keyValue
                            }}
                          >
                            {removeHTMLtags(keyValue)}
                          </Link>
                        );
                      }
                    } else {
                      const splitedKey = key.split(".", 2);
                      if (splitedKey !== undefined && splitedKey.length === 2) {
                        const link = "/" + splitedKey[0] + "/" + splitedKey[1];
                        if (window.location.pathname === link) {
                          return (
                            <Link
                              to={link}
                              key={index}
                              onClick={() => {
                                props.findContent(keyValue);
                              }}
                            >
                              {removeHTMLtags(keyValue)}
                            </Link>
                          );
                        } else {
                          return (
                            <Link
                              key={index}
                              to={{
                                pathname: link,
                                searchedWord: keyValue
                              }}
                            >
                              {removeHTMLtags(keyValue)}
                            </Link>
                          );
                        }
                      }
                    }
                  }
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps)(Searchbox);
