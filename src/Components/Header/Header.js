import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Header = () => {

  
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 500);
      });
    }, []);
    return (
        <div className={scroll ? "scrolled-nav" : "visible-nav"}>
        <nav class="navbar navbar-expand-lg main-navbar  fixed-top">
            <div className="container">
           
           <Link to="/" className=""> <img className="logo" src={logo} alt=""/> </Link>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="rightMenuLink" to="/admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link  className="rightMenuLink" to="/login">Login</Link>
            </li>
            
           
            </ul>
             </div>
             
                
            </div>
        </nav>

       
     
            
        </div>
    );
};

export default Header;