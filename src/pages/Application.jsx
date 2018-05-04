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
        {/*<h2 className="-white">{this.state.domain}</h2>*/}
        <section className="o-topPage">
          <span className="o-topPage__left" />
          <div className="o-topPage__right">
            <div className="o-topPage__summary">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel et
                sapiente beatae eveniet, odio consequuntur minima eaque? Magnam
                veniam recusandae ex dolorem explicabo nobis ut.
              </p>
            </div>
            <a href="/" className="o-topPage__nextStep">
              <img src="/assets/img/misc/next-step-b.png" alt="Descendre jusqu'à la prochaine section."/>
            </a>
          </div>
          <h1 className="o-topPage__domain">{this.state.domain}</h1>
        </section>
      </div>
    );
  }
}

export default withRouter(connect()(Application));
