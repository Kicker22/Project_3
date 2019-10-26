import React from "react";
import { Card, Container, Button } from "react-bootstrap";

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
        <Button href={`https://www.meetup.com/find/?allMeetups=false&keywords=${props.name}&radius=Infinity&userFreeform=Salt+Lake+City%2C+UT&mcId=z84101&mcName=Salt+Lake+City%2C+UT&sort=recommended&eventFilter=mysugg`} target="_blank">View Groups</Button>
      </Card>
    </Container>
  );
}

export default SearchResults;
