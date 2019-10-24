import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import { Container, Nav, Row } from "react-bootstrap";
import TopNavbar from "../Components/Navbar/TopNavbar";
import ArticleCard from "../Components/Axios/ArticleCard";
export default class articles extends Component {
  render() {
    return (
      <div>
        <TopNavbar>
          
        </TopNavbar>
        <Container className="text-center">
      <Row>
          <Media className="mt-4">
            <img
              width={64}
              height={64}
              className="mr-10"
              src="http://theblogofteresa.com/wp-content/uploads/2013/10/heart_red_mom.png"
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
              </Media.Body>
          </Media>
              </Row>
              <Row>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-10"
                  src="https://previews.123rf.com/images/baldyrgan/baldyrgan1504/baldyrgan150400020/38998743-mother-and-son-stylized-vector-silhouette-outlined-sketch-of-mom-and-child.jpg"
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
              </Row>
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
