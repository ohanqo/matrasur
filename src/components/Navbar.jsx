import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import { setLocale } from "../actions/locale";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import Matrasur from "../assets/img/matrasur.svg";
import messages from "../data/messages";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: messages[Object.keys(messages)[0]],
      items: [],
      subitems: []
    };
  }

  componentWillMount() {
    var items = [];
    var subitems = [];

    for (var key in this.state.data) {
      if (this.state.data.hasOwnProperty(key)) {
        //console.log(key + " -> " + this.state.data[key]);
        if (key.includes("navbar") && key.includes("title")) {
          //console.log(key.slice(0, -6))
          items.push(key);
          for (var item in this.state.data) {
            if (item.includes(key.slice(0, -6)) && item.includes(".sub")) {
              subitems.push(item);
            }
          }
        }
      }
    }

    this.setState({ items: items, subitems: subitems });
  }

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

  displayNavItems() {
    console.log(this.state.items);

    return this.state.items.map(item => {
      console.log("Dans la loop -->", item);
      var hisSubitems = [];
      this.state.subitems.forEach(function(subitem) {
        if (subitem.includes(item.slice(0, -6))) {
          hisSubitems.push(subitem);
        }
      });
      return <NavItem key={item} title={item} subitems={hisSubitems} />;
    });
  }

  render() {
    //console.log(messages[Object.keys(messages)[0]])
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
            {this.displayNavItems()}
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0 m-searchbar">
                <input
                  type="search"
                  className="form-control mr-sm-2 m-searchbar__input"
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

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      subitems: props.subitems
    };
  }

  renderTitle() {
    return (
      <FormattedMessage
        key={this.state.title}
        id={this.state.title}
        defaultMessage=" ! Titre non-valide"
      />
    );
  }

  renderSubitems() {
    return this.state.subitems.map(subitem => {
      return (
        <a className="dropdown-item" key={"a-" + subitem}>
          <FormattedMessage
            key={subitem}
            id={subitem}
            defaultMessage=" ! Subitem non-valide"
          />
        </a>
      );
    });
  }

  render() {
    return (
      <li className="nav-item">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          {this.renderTitle()}
        </a>
        <div className="dropdown-menu">{this.renderSubitems()}</div>
      </li>
    );
  }
}

export default withRouter(connect(mapStateToProps, { setLocale })(Navbar));
