import React from "react";
import { Card, Container } from "react-bootstrap";

function SearchResults(props) {
  return (
    <Container>
      <Card className="m-4 p-2 bg-transparent">
        <div className="text-justify bg-transparent">
          <ul>
            <li>
              <h4>Group Name: {props.name}</h4>
            </li>
            <li>
              <h4>Number of Groups: {props.group_count}</h4>
            </li>
            <li>
              <h4>Members: {props.member_count}</h4>
            </li>
          </ul>
          
          <h4>Description:</h4> <p>{props.description}</p>

        </div>
      </Card>
    </Container>
  );
}

export default SearchResults;
