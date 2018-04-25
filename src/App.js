import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import msg from "./messages";

import Home from "./pages/Home";
import Application from "./pages/Application";
import Machines from "./pages/Machine";
import Entreprise from "./pages/Entreprise";
import NotFound from "./pages/NotFound";

import "./assets/css/main.css"; 

class App extends Component {
  render() {
    let { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={msg[lang]}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/applications" component={Application} />
            <Route path="/machines" component={Machines} />
            <Route path="/entreprise" component={Entreprise} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  lang: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps)(App);
