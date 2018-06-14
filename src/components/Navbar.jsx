import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import { setLocale } from "../actions/locale";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import Matrasur from "../assets/img/matrasur.svg";
import messages from "../data/messages";

import Searchbox from "./Searchbox";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: messages[Object.keys(messages)[0]],
      items: [],
      subitems: [],
      links: {}
    };
  }

  componentDidMount() {
    this.toggleBackgroundOnScroll();
  }

  componentWillMount() {
    var items = [];
    var subitems = [];
    var links = {};

    for (var key in this.state.data) {
      if (this.state.data.hasOwnProperty(key)) {
        if (key.includes("navbar") && key.includes("title")) {
          items.push(key);
          for (var item in this.state.data) {
            if (item.includes(key.slice(0, -6)) && item.includes(".sub")) {
              if (!item.includes(".link")) {
                subitems.push(item);
              }
            }
          }
        } else if (key.includes("navbar") && key.includes(".link")) {
          links[key] = this.state.data[key];
        }
      }
    }
    this.setState({ items: items, subitems: subitems, links: links });
  }

  toggleBackgroundOnScroll() {
    window.onscroll = function() {
      var nav = document.getElementsByClassName("navbar")[0];
      this.pageYOffset > nav.offsetHeight
        ? nav.classList.add("-bg--black")
        : nav.classList.remove("-bg--black");
    };
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
    return this.state.items.map(item => {
      var hisSubitems = [];
      this.state.subitems.forEach(function(subitem) {
        var itemWithoutTitle = item.slice(0, -6);
        if (subitem.includes(itemWithoutTitle)) {
          hisSubitems.push(subitem);
        }
      });
      return (
        <NavItem
          key={item}
          title={item}
          subitems={hisSubitems}
          links={this.state.links}
        />
      );
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand" to="/">
          <img
            className="brand__img"
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
          <span className="bar bar__top" />
          <span className="bar bar__middle" />
          <span className="bar bar__bottom" />
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {this.displayNavItems()}
            <li className="nav-item">
              <Searchbox />
            </li>
            <li className="nav-item">
              <div className="lang">
                <a
                  id="flag"
                  className={
                    (this.props.lang === "fr" ? "en" : "fr") +
                    " nav-link lang__text"
                  }
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
      subitems: props.subitems,
      links: props.links
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

  renderSubmenuItems(subitem) {
    return this.state.subitems.map((sub, idx) => {
      if (sub.startsWith(subitem) && sub.includes("submenu.item")) {
        return (
          <li key={idx}>
            <Link to={this.state.links[sub + ".link"]} className="dropdown-item">
              <FormattedMessage id={sub} defaultMessage="!JSON invalide" />
            </Link>
          </li>
        );
      } else {
        return null;
      }
    });
  }

  renderSubitems() {
    return this.state.subitems.map((subitem, index) => {
      if (!subitem.includes("submenu")) {
        var link =
          typeof this.state.links[subitem + ".link"] !== "undefined"
            ? this.state.links[subitem + ".link"]
            : "/";
        return (
          <Link className="dropdown-item" key={index} to={link}>
            <FormattedMessage
              key={subitem}
              id={subitem}
              defaultMessage=" ! Subitem non-valide"
            />
          </Link>
        );
      } else if (subitem.endsWith("submenu")) {
        return (
          <div className="dropdown-submenu" key={index}>
            <a className="dropdown-item">
              <FormattedMessage id={subitem} defaultMessage="!JSON invalide" />
            </a>
            <ul className="dropdown-menu submenu">
              {this.renderSubmenuItems(subitem)}
            </ul>
          </div>
        );
      } else {
        return null;
      }
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
        <div className="dropdown-menu dropdown-menu-center">
          <div className="dropdown-menu__title">
            <h4>{this.renderTitle()}</h4>
          </div>
          <hr />
          {this.renderSubitems()}
        </div>
      </li>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { setLocale }
  )(Navbar)
);
