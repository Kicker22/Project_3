import React from "react";
import { Card, Container} from "react-bootstrap";
import "../../styleSheets/card.css";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const buttonClick = () => {
    // console.log(props.data);
  };
  return (
    <Card data={props.blog} key={props._id} className="articleCard ">
      <Card.Img className='article-card-img' variant='top' src={props.image} alt='card image'/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Author: {props.author}</Card.Text>
        <Link
          to={{
            pathname: "/read",
            data: props.data
          }}
        >
          <button onClick={buttonClick} className="mb-3">
            Read Article
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;

// {
  /* <h1>{props.title}</h1>
<div className="container img-container">
<img style={{width:"200px"}} alt={props.title} src={props.image}></img>
</div>

<div>{props.date}</div>
<div>{props.author}</div>
<div>{props.body}</div> */
// }
