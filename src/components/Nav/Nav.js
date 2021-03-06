import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <nav className="navbar navbar-dark bg-primary">
            <NavLink exact to="/" className="navbar-brand">WikiCountries</NavLink>
        </nav>
    )

}

export default Navbar;