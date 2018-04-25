import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setLocale } from "../actions/locale";
import PropTypes from "prop-types";

import Matrasur from "../assets/img/matrasur.svg";

class Navbar extends Component {
  toggleLanguage() {
    this.props.setLocale("en");
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
                Domaines d'applications
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item">Lorem ipsum</a>
                <a className="dropdown-item">Lorem ipsum</a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Procédés
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item">Lorem ipsum</a>
                <a className="dropdown-item">Lorem ipsum</a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Matières premières
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item">Lorem ipsum</a>
                <a className="dropdown-item">Lorem ipsum</a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Nos machines
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item">Lorem ipsum</a>
                <a className="dropdown-item">Lorem ipsum</a>
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
                  className="nav-link a-lang__text"
                  onClick={() => this.toggleLanguage()}>
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

export default connect(null, { setLocale })(Navbar);
