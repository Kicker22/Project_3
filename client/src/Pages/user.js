// user posting page

import React, { Component } from "react";
import BlogPost from "../Components/Form/user";
import Navbar from "../Components/Header/nav";

export default class user extends Component {
  render() {
    return (
      <div>
        <BlogPost />
        <Navbar />
      </div>
    );
  }
}
