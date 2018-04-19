import React, { Component } from 'react';

import Navbar from '../components/Navbar';

export default class Entreprise extends Component {
    render() {
        return(
            <div>
                <Navbar active="entreprise"/>
                <div className="container">
                    <h2>MATRASUR COMPOSITES</h2>
                    <p>Matrasur Composites fournit le marché des composites depuis 1972 et fait partie des premières entreprises françaises à s’être spécialisée dans les équipements pour la mise en oeuvre des matériaux composites. Aujourd’hui, elle se distingue comme un leader dans le domaine.</p>
                </div>
            </div>
        );
    }
}