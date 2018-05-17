import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import messages from "../data/messages";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: messages[Object.keys(messages)[0]],
      domain: this.props.match.params.domain
    };
  }

  fetchApplication() {
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
    return JSONapplications;
  }

  fetchDomainSections() {
    var JSONdomainSections = [];
    for (var k in this.state.data) {
      if (this.state.data.hasOwnProperty(k)) {
        if (k.includes(this.state.domain) && k.includes(".name")) {
          JSONdomainSections.push(k);
        }
      }
    }
    return JSONdomainSections;
  }

  fetchDomainSectionsItems() {
    var JSONdomainSectionsItems = [];
    for (var k in this.state.data) {
      if (this.state.data.hasOwnProperty(k)) {
        if (k.includes(this.state.domain) && k.includes(".item")) {
          JSONdomainSectionsItems.push(k);
        }
      }
    }
    return JSONdomainSectionsItems;
  }

  fetchLinks() {
    var links = {};
    for (var k in this.state.data) {
      if (this.state.data.hasOwnProperty(k)) {
        if (k.includes(this.state.domain) && k.includes(".link")) {
          links[k] = this.state.data[k];
        }
      }
    }
    return links;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params !== prevState.domain) {
      return {
        domain: nextProps.match.params.domain
      };
    } else {
      return null;
    }
  }

  render() {
    var applications = this.fetchApplication();
    var domainSections = this.fetchDomainSections();
    var domainSectionsItems = this.fetchDomainSectionsItems();
    var links = this.fetchLinks();

    if (applications.includes(this.state.domain)) {
      return (
        <div>
          <Navbar active="application" />
          <Hero
            title={"application." + this.state.domain + ".title"}
            subtitle={"application." + this.state.domain + ".subtitle"}
            button={"application." + this.state.domain + ".button"}
            image={"application." + this.state.domain + ".image"}
            sections={domainSections}
          />
          <FirstSection items={domainSectionsItems} />
          <SecondSection items={domainSectionsItems} links={links} />
          <Footer />
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
  var fstSectionItems = props.items.filter(item => {
    return item.includes(".section-1.");
  });
  return (
    <section className="appSection firstSection -fw -fh -bg--white">
      {fstSectionItems.map(item => {
        if (item.includes(".image")) {
          return (
            <FormattedHTMLMessage
              id={item}
              key={item}
              defaultMessage=" ! JSON Non valide"
            />
          );
        } else {
          return (
            <p className="firstSection__text" key={item}>
              <FormattedMessage id={item} defaultMessage=" ! JSON Non valide" />
            </p>
          );
        }
      })}
    </section>
  );
};

const SecondSection = props => {
  var SecondSectionItems = props.items.filter(item => {
    return item.includes(".section-2.");
  });
  return (
    <section className="appSection secondSection -fw -fh -bg--white">
      <div className="secondSection__wrapper container">
        <div className="row">
          {SecondSectionItems.map(item => {
            if (item.includes(".title")) {
              return (
                <h4 className="secondSection__title col-md-12" key={item}>
                  <FormattedMessage
                    id={item}
                    defaultMessage=" ! JSON Non valide"
                  />
                </h4>
              );
            } else if (item.includes(".text")) {
              var rootItem = item.slice(0, -5);
              console.log(props);
              var link =
                typeof props.links[rootItem + ".link"] !== "undefined"
                  ? props.links[rootItem + ".link"]
                  : "/";
              return (
                <Link className="secondSection__card col" to={link} key={item}>
                  <div className="secondSection__image">
                    <FormattedHTMLMessage
                      id={rootItem + ".image"}
                      key={rootItem + ".image"}
                      defaultMessage=" ! JSON Non valide"
                    />
                  </div>
                  <div className="secondSection__text">
                    <FormattedMessage
                      id={item}
                      key={item}
                      defaultMessage=" ! JSON Non valide"
                    />
                  </div>
                </Link>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Application;
