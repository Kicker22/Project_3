// user posting page

import React, { Component } from "react";
import BlogPost from "../Components/Form/user";
import Navbar from "../Components/Header/nav";
import TopNavbar from "../Components/Navbar/TopNavbar"

export default class user extends Component {
  render() {
    return (
      <div>
        <TopNavbar>
        </TopNavbar>
        <BlogPost />
        <Navbar />
      </div>
    );
  }
}
