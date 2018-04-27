import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: this.props.match.params.domain
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params) {
      return {
        domain: nextProps.match.params.domain
      };
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <Navbar active="application" />
        <h2 className="-white">{this.state.domain}</h2>
      </div>
    );
  }
}

export default withRouter(connect()(Application));
