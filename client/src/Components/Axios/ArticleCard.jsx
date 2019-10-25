import axios from "axios";
import React, { Component } from "react";
import BlogCard from "../Blog/blog.jsx";
import "../../styleSheets/axios.css";

export class ArticleCard extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://mommie-blog.herokuapp.com/blogs",
      "https://mommie-blog.herokuapp.com/blogs"
      )
      .then(res => {
        const blogs = res.data;
        this.setState({ blogs });
        // console.log(res.data);
      });
    }
    
    render() {
      return (
        <div className="d-flex axiosCard">
        {this.state.blogs.map(blog => (
          <BlogCard
            data={blog}
            key={blog._id}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            summary={blog.summary}
            body={blog.body}
            date={blog.date}
            >
            {/* {console.log(blog)} */}
          </BlogCard>


        ))}
      </div>
    );
  }
}

export default ArticleCard;
