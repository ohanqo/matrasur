import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import { setLocale } from "../actions/locale";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import Matrasur from "../assets/img/matrasur.svg";

class Navbar extends Component {
  toggleLanguage() {
    let { lang } = this.props;
    if (lang === "en") {
      this.props.setLocale("fr");
      document.getElementById("flag").classList.remove("fr-fr");
      document.getElementById("flag").classList.add("en-gb");
    } else {
      this.props.setLocale("en");
      document.getElementById("flag").classList.remove("en-gb");
      document.getElementById("flag").classList.add("fr-fr");
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand" to="/">
          <img
            className="a-brand__img"
            src={Matrasur}
            alt="Logo de la société Matrasur"
          />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="a-bar a-bar__top" />
          <span className="a-bar a-bar__middle" />
          <span className="a-bar a-bar__bottom" />
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <FormattedMessage
                  id="navbar.item-1.title"
                  defaultMessage="Item 1"
                />
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/application/aeronautics">
                  <FormattedMessage
                    id="navbar.item-1.subitem-1"
                    defaultMessage="Item 1 Subitem 1"
                  />
                </Link>
                <Link className="dropdown-item" to="/application/frigorific">
                  <FormattedMessage
                    id="navbar.item-1.subitem-2"
                    defaultMessage="Item 1 Subitem 1"
                  />
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <FormattedMessage
                  id="navbar.item-2.title"
                  defaultMessage="Item 2"
                />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item">
                  <FormattedMessage
                    id="navbar.item-2.subitem-1"
                    defaultMessage="Item 1"
                  />
                </a>
                <a className="dropdown-item">
                  <FormattedMessage
                    id="navbar.item-2.subitem-2"
                    defaultMessage="Item 1"
                  />
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <FormattedMessage
                  id="navbar.item-3.title"
                  defaultMessage="Item 3"
                />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item">
                  <FormattedMessage
                    id="navbar.item-3.subitem-1"
                    defaultMessage="Item 1"
                  />
                </a>
                <a className="dropdown-item">
                  <FormattedMessage
                    id="navbar.item-3.subitem-2"
                    defaultMessage="Item 2"
                  />
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <FormattedMessage
                  id="navbar.item-4.title"
                  defaultMessage="Item 2"
                />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item">
                  <FormattedMessage
                    id="navbar.item-4.subitem-1"
                    defaultMessage="Item 2"
                  />
                </a>
                <a className="dropdown-item">
                <FormattedMessage
                  id="navbar.item-4.subitem-2"
                  defaultMessage="Item 2"
                />
                </a>
              </div>
            </li>
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0 m-searchbar">
                <input
                  className="form-control mr-sm-2 m-searchbar__input"
                  type="search"
                  placeholder="Rechercher"
                />
                <button
                  className="btn btn-outline-dark my-2 my-sm-0 m-button m-searchbar__button"
                  type="submit"
                >
                  <i className="fas fa-search" />
                </button>
              </form>
            </li>
            <li className="nav-item">
              <div className="a-lang">
                <a
                  id="flag"
                  className="nav-link a-lang__text en-gb"
                  onClick={() => this.toggleLanguage()}
                >
                  {""}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default withRouter(connect(mapStateToProps, { setLocale })(Navbar));
