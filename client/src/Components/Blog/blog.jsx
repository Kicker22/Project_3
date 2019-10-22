import React from "react";
import { Card,  Container } from "react-bootstrap";

function BlogCard(props) {
  return (
    <div>
      <Container>
        <Card style={{ maxWidth: "700px" }} className=" mt-3">
          <div className="row">
              <img
                style={{
                  height: "260px",
                  width: "260px"
                }}
                src={props.image}
                alt={props.title}
              />
            <div className="col-sm-11">
              <h5>{props.title}</h5>
            </div>
            <button>this is a button</button>
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
