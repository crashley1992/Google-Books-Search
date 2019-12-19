import React from 'react';
import './search.css';
import {Container, Row } from '../Grid/Grid';

const SearchForm = (props) => {
    return(
    <Container>
        <form className="search">
            <div className="form-group">
            <label htmlFor="book"></label>
                <input className="form-control" placeholder="Book Search" value={props.search}
                onChange={props.handleInput}
                ></input>
                <button className="search-button" onClick={(event) => props.searchGoogleBooks(event)} type="submit">Search</button>
            </div>
        </form>
        </Container>
    )
}

export default SearchForm;