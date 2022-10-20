import React from "react";
import "../../src/App.css"


const SearchBar = () => (
    <form action="/" method="get" className="search ">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"className="searchbar"
            id="header-search"
            placeholder="Search Notes"
            name="s" 
        />
        <button type="submit" className="searchButton">Search</button>
    </form>
);

export default SearchBar;