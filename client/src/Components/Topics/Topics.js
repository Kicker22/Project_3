import React, { Component } from "react";
import {Col, Row} from "react-bootstrap";
import Container from "../Container/container";
import Card from "../Card/card";
import SearchResults from "../SearchResults/SearchResults";
import SearchForm from "../SearchForm/SearchForm";
import API from "../../Utils/API";

class Topics extends Component {
  state = {
    result: {},
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
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.id || "Search for a Topic to Join"}
            >
              {this.state.result.id ? (
                <SearchResults
                  id={this.state.result.id}
                  name={this.state.result.name}
                  urlkey={this.state.result.urlkey}
                  group_count={this.state.result.group_count}
                  description={this.state.result.description}
                  lang={this.state.result.lang}
                />
              ) : (
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
      </Container>
    );
  }
}

export default Topics;
