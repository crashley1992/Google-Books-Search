import React from 'react';
import './jumbotron.css'
import SearchForm from '../SearchForm/SearchForm';

const Jumbotron = () => {
    return(
        <div className="jumboron">
            <h1 className="display-4">Google Book Search</h1>
            <SearchForm />
        </div>
    );
}

export default Jumbotron;

