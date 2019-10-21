import React, { Component } from "react";
import "../../styleSheets/home.css";
import Facebook from "../facebookAuth/Facebook";

import {
  Navbar,
  NavItem,
} from "react-bootstrap";

export class TopNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar className=" home-navbar ">
          <Facebook />
          <NavItem className="link-container">
            <a className="mr-4 nav-link" href="/">
              Home
            </a>
            <a className="mr-4 nav-link" href="" href="/articles">
              Browse
            </a>
            <a className="mr-4 nav-link" href="/meetups">
              Meetup
            </a>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;
