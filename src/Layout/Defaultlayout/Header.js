import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand">LOGO</Link>
                <div className="d-flex justify-content-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link text-dark">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Blog" className="nav-link text-dark">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Service" className="nav-link text-dark">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link text-dark">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        </nav >
    </div >
)
};

export default Header;
