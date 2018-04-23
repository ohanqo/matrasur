import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { FormattedMessage } from 'react-intl';

import Matrasur from '../assets/img/matrasur.svg';

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg fixed-top">
                <Link className="navbar-brand" to="/"><img className="a-brand__img" src={Matrasur} alt="Logo de la société Matrasur"/></Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="a-bar a-bar__top"></span>
                    <span className="a-bar a-bar__middle"></span>
                    <span className="a-bar a-bar__bottom"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                            {/*<Link className={this.props.active === "application" ? "active nav-link dropdown-toggle" : "nav-link dropdown-toggle"} to="/applications">Domaines d'applications</Link>*/}
                            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                                {/*<FormattedMessage id="nav.menu-1" defaultMessage="Domaines d'applications"/>*/}
                                Domaines d'applications
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item">Lorem ipsum</a>
                                <a className="dropdown-item">Lorem ipsum</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/*<Link className={this.props.active === "procedes" ? "active nav-link dropdown-toggle" : "nav-link dropdown-toggle"} to="/procedes">Procédés</Link>*/}
                            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">Procédés</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item">Lorem ipsum</a>
                                <a className="dropdown-item">Lorem ipsum</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/*<Link className={this.props.active === "matiere" ? "active nav-link dropdown-toggle" : "nav-link dropdown-toggle"} to="/matieres">Matières premières</Link>*/}
                            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">Matières premières</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item">Lorem ipsum</a>
                                <a className="dropdown-item">Lorem ipsum</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/*<Link className={this.props.active === "machines" ? "active nav-link dropdown-toggle" : "nav-link dropdown-toggle"} to="/machines">Nos machines</Link>*/}
                            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">Nos machines</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item">Lorem ipsum</a>
                                <a className="dropdown-item">Lorem ipsum</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 m-searchbar">
                        <input className="form-control mr-sm-2 m-searchbar__input" type="search" placeholder="Rechercher"/>
                        <button className="btn btn-outline-dark my-2 my-sm-0 m-button m-searchbar__button" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}