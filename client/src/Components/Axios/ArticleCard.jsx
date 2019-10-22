import axios from "axios";
import React, { Component } from "react";
import BlogCard from "../Blog/blog.jsx";

export class ArticleCard extends Component {
  state = {
    blogs: []
  };
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://mommie-blog.herokuapp.com/blogs"
      )
      .then(res => {
        const blogs = res.data;
        this.setState({ blogs });
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        {this.state.blogs.map(blog => (
          <BlogCard
            key={blog._id}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            body={blog.body}
            date={blog.date}
          />
        ))}
      </div>
    );
  }
}

export default ArticleCard;