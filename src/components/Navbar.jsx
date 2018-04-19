import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Matrasur from '../assets/img/matrasur.svg';

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
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
                        <li className="nav-item">
                            <Link className={this.props.active === "application" ? "active nav-link" : "nav-link"} to="/applications">Domaines d'applications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={this.props.active === "procedes" ? "active nav-link" : "nav-link"} to="/procedes">Procédés</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={this.props.active === "matiere" ? "active nav-link" : "nav-link"} to="/matieres">Matières premières</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={this.props.active === "machines" ? "active nav-link" : "nav-link"} to="/machines">Nos machines</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={this.props.active === "entreprise" ? "active nav-link" : "nav-link"} to="/entreprise">L'entreprise</Link>
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