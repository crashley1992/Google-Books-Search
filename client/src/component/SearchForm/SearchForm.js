import React from 'react';
import './search.css';

const SearchForm = (props) => {
    return(
        <form className="search">
            <div className="form-group">
            <label htmlFor="book">Nook</label>
                <input className="form-control" placeholder="Book Search" value={props.search}
                onChange={props.handleInput}
                ></input>
                 {/* <datalist id="books">
                    {props.books.map(books => (
                        <option value={book} key={book} />
                    ))}
                    </datalist> */}
                <button className="btn btn-info" onClick={(event) => props.searchGoogleBooks(event)} type="submit">Search</button>
            </div>
        </form>
    )
}

export default SearchForm;