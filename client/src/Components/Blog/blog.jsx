import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

function BlogCard(props) {
  return (
    <div>
      <Container>
        <Card style={{ maxWidth: "750px" }} className=" mt-3">
          <div className="row">
            <div className="col-sm-4">
              <img
                style={{
                  height: "260px",
                  width: "260px"
                }}
                src={props.image}
                alt={props.title}
              />
            </div>
            <div className="col-sm-8 mt-4">
              <h5 className="text-center">{props.title}</h5>
              <div className="card-body d-flex justify-content-center">
                <p className="card-text">{props.summary}</p>
              </div>
              <div className="btn-div text-center mb-2">
                <button>this is a button</button>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default BlogCard;

{
  /* <h1>{props.title}</h1>
<div className="container img-container">
<img style={{width:"200px"}} alt={props.title} src={props.image}></img>
</div>

<div>{props.date}</div>
<div>{props.author}</div>
<div>{props.body}</div> */
}
