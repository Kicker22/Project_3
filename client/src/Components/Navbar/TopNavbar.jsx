import React, { Component } from "react";
import "../../styleSheets/home.css";
import Facebook from "../facebookAuth/Facebook";
import { Link } from "react-router-dom";

import { Navbar, NavItem } from "react-bootstrap";

export class TopNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="home-navbar">
          <Facebook />
          <NavItem className="link-container">
            <a className="mr-4 nav-link" href="/">
              Home
            </a>
            <Link
              to={{
                pathname: "/blogs"
              }}
              >
            <a className="mr-4 nav-link" href="/blogs">
             API
            </a>
            </Link>

            <Link
              to={{
                pathname: "/meetups"
              }}
            >
              <a className="mr-4 nav-link" href="/meetups">
                Meetup
              </a>
            </Link>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;
