import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="onglets">
            <NavLink to="/" >Home</NavLink>
            <NavLink to ="/projets" >Mes Projets</NavLink>
            </div>
            <div className="liens-reseaux">
            <a href="https://github.com/hlnvrnt"><img src="/images/github.png" alt="github" /></a>
            <a href="https://www.linkedin.com/in/hélène-vernet"><img src="/images/linkedin.png" alt="github" /></a>
            <a  onClick={(e) => {window.location.href ='mailto:helene.vernet@live.fr';}}><img src="/images/email (1).png" /></a>
            </div>
        </div>
    );
};

export default Navbar;