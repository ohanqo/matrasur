import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import msg from "./data/messages";

import Home from "./pages/Home";
import Global from "./pages/Global";
import NotFound from "./pages/NotFound";
import Documentation from "./pages/Documentation";
import International from "./pages/International";
import Mention from "./pages/Mention";


import "./assets/css/main.css";

class App extends Component {
  render() {
    let { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={msg[lang]}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/other/documentation" component={Documentation} />
            <Route path="/other/international" component={International} />
            <Route path="/other/legal" component={Mention} />                   
            <Route path="/:domain/:param" component={Global} />
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

export default withRouter(connect(mapStateToProps)(App));
