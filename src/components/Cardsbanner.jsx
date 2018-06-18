import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import LazyLoad from "react-lazyload";

import messages from "../data/messages";

const Cardsbanner = props => {
  const data = messages[Object.keys(messages)[0]];
  return (
    <div className="cardsbanner">
      <LazyLoad height={200} once>
        <div className="banner">
          <div className="card card-body">
            <div className="card__title card-title">
              <FormattedMessage
                id={"home.card-1.title"}
                defaultMessage="! JSON non-valide"
              />
            </div>
            <div className="card__content card-text">
              <FormattedMessage
                id={"home.card-1.text"}
                defaultMessage="! JSON non-valide"
              />
            </div>
            <Link to={data["home.card-1.link"]}>
              <button type="button" className="card__button btn">
                <FormattedMessage
                  id={"home.card-1.button"}
                  defaultMessage="! JSON non-valide"
                />
              </button>
            </Link>
          </div>
          <div className="card card-body">
            <div className="card__title card-title">
              <FormattedMessage
                id={"home.card-2.title"}
                defaultMessage="! JSON non-valide"
              />
            </div>
            <div className="card__content card-text">
              <FormattedMessage
                id={"home.card-2.text"}
                defaultMessage="! JSON non-valide"
              />
            </div>
            <Link to={data["home.card-1.link"]}>
              <button type="button" className="card__button btn">
                <FormattedMessage
                  id={"home.card-2.button"}
                  defaultMessage="! JSON non-valide"
                />
              </button>
            </Link>
          </div>
          <div className="card card-body">
            <div className="card__title card-title">
              <FormattedMessage
                id={"home.card-3.title"}
                defaultMessage="! JSON non-valide"
              />
            </div>
            <div className="card__content card-text">
              <FormattedMessage
                id={"home.card-3.text"}
                defaultMessage="! JSON non-valide"
              />
            </div>
            <Link to={data["home.card-3.link"]}>
              <button type="button" className="card__button btn">
                <FormattedMessage
                  id={"home.card-3.button"}
                  defaultMessage="! JSON non-valide"
                />
              </button>
            </Link>
          </div>
          <div className="card card-body">
            <div className="card__title card-title">
              <FormattedMessage
                id={"home.card-4.title"}
                defaultMessage="! JSON non-valide"
              />
            </div>
            <div className="card__content card-text">
              <FormattedMessage
                id={"home.card-4.text"}
                defaultMessage="! JSON non-valide"
              />
            </div>
            <Link to={data["home.card-4.link"]}>
              <button type="button" className="card__button btn">
                <FormattedMessage
                  id={"home.card-4.button"}
                  defaultMessage="! JSON non-valide"
                />
              </button>
            </Link>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default Cardsbanner;
