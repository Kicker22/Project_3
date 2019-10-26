import React, { Component } from "react";
import {
  Button,
  Nav,
  Jumbotron,
  Card,
  Row,
  Container,
} from "react-bootstrap";
import TopNavbar from "../Components/Navbar/TopNavbar"
export default class savings extends Component {
  render() {
    return (
      <div>
        <TopNavbar>
          
        </TopNavbar>
        <Container className="text-center mt-4">
          <Card.Header><h1 clasName="flex-center">Savings Page!</h1></Card.Header>
          <br />
          <h2>Find deals here!</h2>
         
          <Jumbotron className="content-center mt-2 bg-transparent">
            <Row>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Precision Auto Glass</Card.Title>
                  <Card.Img src="https://img.grouponcdn.com/deal/nsSpMWigQsEC5qpb7R1s/Ld-2048x1229/v1/c700x420.jpg"></Card.Img>
                  <Card.Text>One Rock Chip Repair or $100 Towards Insurance Deductible at Precision Auto Glass (Up to 55% Off)</Card.Text>
                  <Button variant="outline-dark" href="https://www.groupon.com/deals/precision-auto-glass-4">View</Button>
                </Card.Body>
              </Card> 
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Plant Nite</Card.Title>
                  <Card.Img src="https://img.grouponcdn.com/deal/rKWpnA2rTAMuvC5C1bJQHf4fnf7/rK-960x576/v1/c700x420.jpg"></Card.Img>
                  <Card.Text>Tiny Terrarium and Zen Garden-Making at Plant Nite (Up to 28% Off)</Card.Text>
                  <Button variant="outline-dark" href="https://www.groupon.com/deals/plant-nite-49-salt-lake-city">View</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Dove Antiperspirant Spray for Women (10-Pack)</Card.Title>
                  <Card.Img src="https://img.grouponcdn.com/deal/fZJzHBEdBMhiSWj8fE6hRJMZQpy/fZ-960x576/v1/c700x420.jpg"></Card.Img>
                  <Card.Text>Assorted scents of women’s antiperspirant spray designed to provide you with 48 hours of freshness</Card.Text>
                  <Button variant="outline-dark" href="https://www.groupon.com/deals/gg-cm-10-pack-dove-antiperspirant-spray-deodorant-for-women-150-ml-1">View</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>The Original Paint Nite</Card.Title>
                  <Card.Img src="https://img.grouponcdn.com/deal/26q5BXs6MwFRrQnGgSF66GwpKbL2/26-960x576/v1/c700x420.jpg"></Card.Img>
                  <Card.Text>The Original Paint & Sip (Up to 28% Off)</Card.Text>
                  <Button variant="outline-dark" href="https://www.groupon.com/deals/paint-nite-505-ogden">View</Button>
                </Card.Body>
              </Card>



              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Bout Time Pub & Grub</Card.Title>
                  <Card.Img src="https://img.grouponcdn.com/deal/k3EyCBD149fq3nSARny/ft-2048x1229/v1/c700x420.jpg"></Card.Img>
                  <Card.Text>Pub Food at 'Bout Time Pub & Grub (Up to 50% Off). Two Options Available.</Card.Text>
                  <Button variant="outline-dark" href="https://www.groupon.com/deals/bout-time-pub-grub-layton-ut-2">View</Button>
                </Card.Body>
              </Card>

              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Best Western Premier Brian Head Hotel & Spa - Brian Head, UT</Card.Title>
                  <Card.Img src="https://img.grouponcdn.com/deal/2i1Yox2aQNz9c4itG6pvPuDFtQw8/2i-2048x1229/v1/c620x376.jpg"></Card.Img>
                  <Card.Text>Nestled amid forests, mountains, and red-rock formations, this rustic lodge offers upscale amenities such as a spa and indoor heated pool.</Card.Text>
                  <Button variant="outline-dark" href="https://www.groupon.com/deals/ga-bk-best-western-premier-brian-head-hotel-spa-1">View</Button>
                </Card.Body>
              </Card>
            </Row>
          </Jumbotron>
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
