import './Navbar.css';
import React from 'react';
import logo from './Vishvas_Power.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
    <img src={logo} alt="Logo" className="logo" />
      <div className="nav-item"></div>
      <ul className="nav-items">
        <li className="nav-item">
          Auto Transformer
          <ul className="dropdown">
            <li>Erection</li>
            <li>Testing</li>
            <li>Charging</li>
          </ul>
        </li>
        <li className="nav-item">
          Traction Transformer
          <ul className="dropdown">
            <li>Erection</li>
            <li>Testing</li>
            <li>Charging</li>
          </ul>
        </li>
        <li className="nav-item">
          Dashboard
        </li>
        <li className="nav-item">
          About Us
        </li>
        <li className="nav-item">
            <Link to="/signup">Logout</Link>
          
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;