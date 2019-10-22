// user posting page

import React, { Component } from "react";
import BlogPost from "../Components/Form/user";
import TopNavbar from "../Components/Navbar/TopNavbar";
import { Container, Nav } from "react-bootstrap"
export default class user extends Component {
  render() {
    return (
      <div>
        <Container className = "text-center">
        <TopNavbar>
        </TopNavbar>
        
        <BlogPost />
        <Nav.Item>
            <Nav.Link className="text-info py-4" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
        </Container>
      </div>
    );
  }
}
