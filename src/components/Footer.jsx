import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="o-footer -fw -hh -bg--black">
        <div className="o-footer__columns -white">
          <div className="o-footer__column">
            <div className="o-footer__column--img">
              <img
                src="/assets/img/matrasur--square.svg"
                alt="Logo de la société Matrasur Composites"
              />
            </div>
            <div className="o-footer__column--tel">+33 1 61 61 65 65</div>
            <div className="o-footer__column--mail">
              info@matrasurcomposites.com
            </div>
            <div className="o-footer__column--social">
              <img
                src="/assets/img/icon/youtube.svg"
                alt="Chaîne YouTube Matrasur Composite"
              />
              <img
                src="/assets/img/icon/facebook.svg"
                alt="Page Facebook Matrasur Composite"
              />
            </div>
          </div>
          <div className="o-footer__column">
            <ul>
              <li className="o-footer__column--title">
                Domaines d'application
              </li>
              <li>Lorem ipsum</li>
            </ul>
            <ul>
              <li className="o-footer__column--title">Procédés</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div className="o-footer__column">
            <ul>
              <li className="o-footer__column--title">Matières premières</li>
              <li>Lorem ipsum</li>
            </ul>
            <ul>
              <li className="o-footer__column--title">Nos machines</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
