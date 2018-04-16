import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Matrasur from '../assets/img/matrasur.svg';

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img className="navbar-brand--img" src={Matrasur} alt="Logo de la société Matrasur"/></Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler--bar navbar-toggler--bar__top"></span>
                    <span className="navbar-toggler--bar navbar-toggler--bar__middle"></span>
                    <span className="navbar-toggler--bar navbar-toggler--bar__bottom"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className={this.props.active === "application" ? "active nav-link" : "nav-link"} to="/applications">Domaines d'applications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={this.props.active === "machine" ? "active nav-link" : "nav-link"} to="/machines">Nos machines</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={this.props.active === "entreprise" ? "active nav-link" : "nav-link"} to="/entreprise">L'entreprise</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Rechercher"/>
                            <button className="btn btn-outline-dark my-2 my-sm-0 navbar--button" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                    </form>
                </div>
            </nav>
        );
    }
}