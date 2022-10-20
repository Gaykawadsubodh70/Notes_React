import React from "react";
import "../../src/App.css"
import SearchBar from "./Searchbar";
const Navbar = () => {

 
  return (
    <>
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#SignUp">SignUp</a>
     <SearchBar/>
      
      </div>
    </>
  );
};

export default Navbar;
