import React from 'react';
import './search.css';

const SearchForm = (props) => {
    return(
        <form className="search">
            <div className="form-group">
            <label htmlFor="book"></label>
                <input className="form-control" placeholder="Book Search" value={props.search}
                onChange={props.handleInputChange}
                name="book"
                list="books"
                type="text"
                id="book"
                ></input>
                <button className="btn btn-info" type="submit">Search</button>
            </div>
        </form>
    )
}

export default SearchForm;