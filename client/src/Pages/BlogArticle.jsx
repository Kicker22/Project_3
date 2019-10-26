import React, { Component } from "react";
import TopNav from "../Components/Navbar/TopNavbar";
// import Jumbotron from "react-bootstrap/Jumbotron"
import { Jumbotron, Container } from "react-bootstrap";
import '../styleSheets/blogArticle.css'

export class BlogArticle extends Component {
  state = {
    data:""
  }
  render() {
    const {data} = this.props.location

    
    
    return (

      <div className='bg-target'>
        <TopNav/>
            
        <div className="article-content-body">
        <Container className='mt-4 mb-0'>
          <Jumbotron fluid className=' jumbo-info mb-0'>
            <Container className="text-center">
                {/* title will take the title from the database */}
              <h1 className="article-title">{data.title}</h1>
              {/* author will take the author from the db */}
              <h4 className="article-author">{data.author}</h4>
              <hr className="my-4 jumbo-sep" />
              {/* if we add a synopsis */}
              <div className="synopsis">{data.synopsis}</div>
            </Container>
          </Jumbotron>
        </Container>

        <Container className="mt-0 article-body-container p-3">
            {/* Aticle body will take the article body from the data base */}
          <article className='article-body mt-4 mb-4'>
           <p>{data.body}</p>
          </article>
        </Container>
        </div>

        <footer className=' mt-4 container bg-dark'>
            <Jumbotron className='m-0 d-flex justify-content-center footer'>
                <a  className="footer-links mr-3"href="http://">Home</a>
                <a  className="footer-links mr-3"href="http://">Contact</a>
                <a  className="footer-links mr-3"href="http://">Browse More</a>
            </Jumbotron>
        </footer>
      </div>
    );
  }
}

export default BlogArticle
