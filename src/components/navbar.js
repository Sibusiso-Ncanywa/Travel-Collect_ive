import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Travel Collect_ive
            </Link>
            <button
              type="button"
              className="navbar-toggler btn"
              data-toggle="collapse"
              data-target="#navbarResponsive"
            >
              <FaAlignRight />
            </button>
            <div
              className="collapse navbar-collapse text-center"
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/locations">
                    Locations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#contactUs">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
