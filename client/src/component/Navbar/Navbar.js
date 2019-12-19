import React from 'react';
import { Link } from "react-router-dom";

const NavTabs = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/search">
            Google Books
        </Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/search" className={
                        window.location.pathname === "/search" || window.location.pathname === "/search" ? "nav-link active" : "nav-link"
                    }>Search
                    </Link>
                </li>
            </ul>
        </div>   
    </nav>
    );
}

export default NavTabs;