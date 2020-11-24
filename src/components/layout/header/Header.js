import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="/home">
            Football Manager 2020 guide
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="/tactics">
                  Tactics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/players">
                  Players
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/matchpreparation">
                  Match Preparation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/traininganddevelopment">
                  Training & Development
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/scoutingandtransfers">
                  Scouting & Transfers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
