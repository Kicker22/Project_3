import React from "react";
import { Card } from "react-bootstrap";
import "../../styleSheets/card.css";

function BlogCard(props) {
  return (
    <Card key={props._id} className="articleCard ">
      <img
        src={props.image}
        alt="card image"
        className="article-card-img"
      ></img>
      <div className="article-card-title container">
        <h5 className='text-center'>{props.title}</h5>
        <p>Author: {props.author}</p>
        <div>
        <button className='mb-3'>Read Article</button>
        </div>

        {/* <p>{props.summary}</p> */}
      </div>
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
