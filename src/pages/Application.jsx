import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import Navbar from "../components/Navbar";

import messages from "../data/messages";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: messages[Object.keys(messages)[0]],
      domain: this.props.match.params.domain
    };

    var JSONapplications = [];
    for (var key in this.state.data) {
      if (this.state.data.hasOwnProperty(key)) {
        if (key.includes("application") && key.includes(".title")) {
          var extractedApplication = key.split(".")[1];
          if (!(extractedApplication in JSONapplications)) {
            JSONapplications.push(extractedApplication);
          }
        }
      }
    }

    //We get the names of the sections and we pass them to the Hero component
    var JSONdomainSections = [];
    for (var k in this.state.data) {
      if (this.state.data.hasOwnProperty(k)) {
        if (k.includes(this.state.domain) && k.includes(".name")) {
          JSONdomainSections.push(k);
        }
      }
    }

    this.state = {
      applications: JSONapplications,
      domainSections: JSONdomainSections
    };
    console.log(JSONapplications);
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
    if (this.state.applications.includes(this.state.domain)) {
      return (
        <div>
          <Navbar active="application" />
          <Hero
            title={"application." + this.state.domain + ".title"}
            subtitle={"application." + this.state.domain + ".subtitle"}
            button={"application." + this.state.domain + ".button"}
            image={"application." + this.state.domain + ".image"}
            sections={this.state.domainSections}
          />
          <FirstSection />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const Hero = props => {
  return (
    <section className="hero -fw -fh">
      <FormattedHTMLMessage
        id={props.image}
        defaultMessage="! JSON Non valide"
      />
      <div className="hero__content -white">
        <h2 className="hero__title">
          <FormattedMessage
            id={props.title}
            defaultMessage=" ! JSON Non valide"
          />
        </h2>
        <p className="hero__subtitle">
          <FormattedMessage
            id={props.subtitle}
            defaultMessage=" ! JSON Non valide"
          />
        </p>
        <button className="hero__button">
          <FormattedMessage
            id={props.button}
            defaultMessage=" ! JSON Non valide"
          />
        </button>
      </div>
      <ul className="hero__menu -bg--white">
        {props.sections.map(section => {
          return (
            <li className="-hoverUnderline" key={section}>
              <FormattedMessage
                id={section}
                defaultMessage=" ! JSON Non valide"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const FirstSection = props => {
  return <section className="appSection -fw -fh -bg--white" />;
};

export default withRouter(connect()(Application));
