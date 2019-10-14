import React, { Component } from 'react';
import {Nav, Button, Jumbotron, Card, Row,} from 'react-bootstrap';
export default class content extends Component {
render (){
    return(
      <div>
        <h1 clasName="flex-center">Mommie Blog</h1>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/browes">Browse</Nav.Link>
            </Nav.Item>
          </Nav>
        <Jumbotron>
        <Row>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 1</Card.Title>
    <Card.Text>
      Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 2</Card.Title>
    <Card.Text>
    Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 3</Card.Title>
    <Card.Text>
    Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
</Row>
<Row>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 1</Card.Title>
    <Card.Text>
      Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 2</Card.Title>
    <Card.Text>
    Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 3</Card.Title>
    <Card.Text>
    Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
</Row>
<Row>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 1</Card.Title>
    <Card.Text>
      Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 2</Card.Title>
    <Card.Text>
    Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 3</Card.Title>
    <Card.Text>
    Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
</Row>
      </Jumbotron>
      </div>
    )
}
}