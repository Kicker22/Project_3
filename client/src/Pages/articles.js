import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import { Container, Nav } from "react-bootstrap";
import TopNavbar from "../Components/Navbar/TopNavbar"

export default class articles extends Component {
  render() {
    return (
      <div>
        <TopNavbar>
          
        </TopNavbar>
        <Container className="text-center">
          <Media className="mt-4">
            <img
              width={64}
              height={64}
              className="mr-3"
              src="holder.js/64x64"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Example Username</h5>
              <p id="post">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>

              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="holder.js/171x180"
                  rounded
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
            </Media.Body>
          </Media>
        </Container>
        <Nav.Item className = "text-center">
            <Nav.Link className="text-info py-4" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
      </div>
    );
  }
}
