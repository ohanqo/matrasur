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
    window.find(query);    
    this.toggleDisplaySearchForm();    
    window.find(query);
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
  return (
    <div className="searchbox">
      <button
        className="btn btn-outline-dark my-2 my-sm-0 m-button m-searchbar__button"
        onClick={props.toggleDisplaySearchForm}
      >
        <i className="fas fa-search" />
      </button>
      <div
        id="modal"
        className={(props.open ? "-fade--in " : "-displayNone ") + "modal"}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
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
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.toggleDisplaySearchForm}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {Object.keys(props.matches).map((key, index) => {
                console.log(key)
                var keyValue = props.matches[key];
                if (
                  !(
                    key.includes(".link") ||
                    key.includes(".image") ||
                    key.includes(".img") ||
                    (key.includes("navbar") && key.includes(".title")) ||
                    key.includes("contact.subtitle") ||
                    (key.startsWith("footer.social.icon") &&
                      !key.endsWith(".url"))
                  )
                ) {
                  if (key.includes(".subitem") && key.includes("navbar") && !key.includes("submenu")) {
                    return (
                      <Link
                        to={messagesOfHisLanguage[key + ".link"]}
                        key={index}
                      >
                        {keyValue}
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
                            onClick={() => { props.findContent(keyValue) }}
                          >
                            {keyValue}
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
                            {keyValue}
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
                              onClick={() => { props.findContent(keyValue) }}
                            >
                              {keyValue}
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
                              {keyValue}
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
