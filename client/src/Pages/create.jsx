import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../styleSheets/create.css";





class create extends Component {
  state={
      redirect: ""
  }
    render() {
        return (
            <div className="formBackground pb-5">
            <div className="jumbotron jumbotron-fluid jumbo-content container">
                <div className="container text-center">
                    <a href="" className="fas fa-home text-white fa-2x mb-4"></a>
                    <h1 className="display-3 text-center text-white">Create Your Article </h1>
                </div>
            </div>

            <form action="/blogs" method="post" className="container mb-0">
                <div className="article-info container parallax">
                    <div className="form-group mt-3">
                        <label for="blogsTest">Image URL</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="image"
                            aria-describedby="emailHelp" placeholder="Enter stuff" />
                    </div>
                    <div className="form-group">
                        <label for="blogsTest">Title*</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="title"
                            aria-describedby="emailHelp" placeholder="Enter stuff" />
                    </div>
                    <div className="form-group">
                        <label for="blogsTest">Author*</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="author"
                            aria-describedby="emailHelp" placeholder="Enter stuff" />
                    </div>
                    <div className="form-group">
                        <label for="blogsTest">Article Summary*</label>
                        <textarea rows='3' className="form-control" id="exampleFormControlTextarea1" name="summary"
                            placeholder="Enter stuff"></textarea>
                    </div>

                    <div className="form-group">
                        <label for="blogsTest">Body* (text area will expand)</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="body" rows="25"></textarea>
                    </div>
                <div className="submit-button container text-center ">
    
                        <button  onClick={() => window.open('/home')} type="submit" id="testButton" className="btn btn-light btn-lg btn-block my-4">Submit</button>

                        <button  type="submit" id="testButton" className="btn btn-light btn-lg btn-block my-4">Submit</button>
                </div>
                </div>
            </form>
            </div>
        );
    }
}

export default create