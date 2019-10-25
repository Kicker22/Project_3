import React, { Component } from "react";
import { Nav, Jumbotron, Row, Container, Image, Col } from "react-bootstrap";
import Card from "../Components/Card/card";
import SearchResults from "../Components/SearchResults/SearchResults";
import SearchForm from "../Components/SearchForm/SearchForm";
import API from "../Utils/API";
import Meetup from "../Images/meetup.png";

// import Slide2 from "../Images/slide2.png";
// import Slide3 from "../Images/slide3.png";
import TopNavbar from "../Components/Navbar/TopNavbar";

export default class meetups extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.SearchResults("");
  }

  SearchResults = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the MeetUpsSearch API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.SearchResults(this.state.search);
  };

  render() {
    return (
      <div>
        <TopNavbar/>
      <Container className="text-center mt-4">
        <br />
        <br />
        <Image src={Meetup} fluid />
        <br />
        <Jumbotron className="content-center mt-4 bg-transparent">
          <h2 className="flex-center">Find, Connect, and Grow</h2>
          <Row>
            <Col size="md-8">
              <Card
                heading={this.state.result.id || "Search for a Topic to Join"}
              >
                {this.state.result.map( result => (
                  <SearchResults 
                    id={result.id}
                    name={result.name}
                    urlkey={result.urlkey}
                    group_count={result.group_count}
                    description={result.description}
                    lang={result.lang}
                  />
                ))} {this.state.result.length === 0 && (
                  <h3>No Results to Display</h3>
                )}
              </Card>
            </Col>
            <Col size="md-4">
              <Card heading="Search">
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </Card>
            </Col>
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