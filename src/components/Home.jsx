import React, { Component } from 'react';
import Searchbar from './Nav/SearchBar'

class Header extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="app-title col-md-12">
                            <h1>Mooviegator</h1>
                        </div>
                        
                        <div className="search-form">
                            <Searchbar/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;