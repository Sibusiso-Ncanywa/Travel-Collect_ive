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
          <div>
            <Link to="/" className="navbar-brand">
              Travel Collect_ive
            </Link>

            <button
              type="button"
              className="navbar-toggler nav-icon btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight />
            </button>
          </div>

          <div className="container-fluid">
            <div
              className={
                this.state.isOpen
                  ? "collapse navbar-collapse text-center"
                  : "navbar-collapse text-center"
              }
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
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
