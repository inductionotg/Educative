import React from "react";
import "./Navbar.css";
import logo from '../assests/logo/images.png'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div>
        <img src={logo} alt="logo" className="navbar-logo" />
        <Link to='/'><span>educative</span></Link>
      </div>
      <div className="navbar-items">
        <ul className="menu-item">
          <li>Solutions</li>
          <li>Solutions</li>
          <li>Solutions</li>
        </ul>
        <button className="btn-login"> Login </button>
      </div>
    </nav>
  );
};

export default Navbar;
