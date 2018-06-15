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
      links: {},
      opened: false
    };
  }

  toggleNavbar = this.toggleNavbar.bind(this);

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

  toggleNavbar() {
    this.setState({ opened: !this.state.opened });
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
          className={"navbar-toggler" + (this.state.opened ? "" : " collapsed")}
          type="button"
          onClick={this.toggleNavbar}
        >
          <span className="bar bar__top" />
          <span className="bar bar__middle" />
          <span className="bar bar__bottom" />
        </button>
        <div
          className={
            "collapse navbar-collapse" + (this.state.opened ? " show" : "")
          }
        >
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
      links: props.links,
      submenuIsOpen: false,
      isOpen: false
    };
  }

  toggleSubmenu = this.toggleSubmenu.bind(this);
  toggleMenu = this.toggleMenu.bind(this);
  setWrapperRef = this.setWrapperRef.bind(this);
  handleClickOutside = this.handleClickOutside.bind(this);

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && window.innerWidth > 992) {
      this.setState({ isOpen: false });
    }
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
            <Link
              to={this.state.links[sub + ".link"]}
              className={
                "dropdown-item " +
                (this.state.links[sub + ".link"] === window.location.pathname
                  ? "disabled"
                  : "")
              }
              onClick={this.toggleMenu}
            >
              <FormattedMessage id={sub} defaultMessage="!JSON invalide" />
            </Link>
          </li>
        );
      } else {
        return null;
      }
    });
  }

  toggleSubmenu() {
    this.setState({ submenuIsOpen: !this.state.submenuIsOpen });
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  renderSubitems() {
    return this.state.subitems.map((subitem, index) => {
      if (!subitem.includes("submenu")) {
        var link =
          typeof this.state.links[subitem + ".link"] !== "undefined"
            ? this.state.links[subitem + ".link"]
            : "/";
        return (
          <Link
            className={
              "dropdown-item " +
              (link === window.location.pathname
                ? "disabled"
                : "")
            }
            key={index}
            to={link}
            onClick={this.toggleMenu}
          >
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
            <a className="dropdown-item dot" onClick={this.toggleSubmenu}>
              <FormattedMessage id={subitem} defaultMessage="!JSON invalide" />
            </a>
            <ul
              className={
                this.state.submenuIsOpen
                  ? "dropdown-menu submenu show"
                  : "dropdown-menu submenu"
              }
            >
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
      <li className="nav-item" ref={this.setWrapperRef}>
        <a
          className="nav-link dropdown-toggle"
          role="button"
          onClick={this.toggleMenu}
        >
          {this.renderTitle()}
        </a>
        <div
          className={
            this.state.isOpen
              ? "dropdown-menu dropdown-menu-center show"
              : "dropdown-menu dropdown-menu-center"
          }
        >
          <button
            className="navbar-toggler navbar-toggler--desktop"
            onClick={this.toggleMenu}
          >
            <span className="bar bar__top bar--black" />
            <span className="bar bar__middle bar--black" />
            <span className="bar bar__bottom bar--black" />
          </button>
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
