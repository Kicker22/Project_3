import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Container } from "react-bootstrap";

export default class Facebook extends Component {
  state = {
    autoLoad: false,
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  logOut = response => {
    this.setState({
      isLoggedIn: false,
      autoLoad: false,
      userID: response.userID,
      name: response.name,
      email: response.email
    });
  };

  // componentClicked = () => console.log("this has been clicked");
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div className="user-img">
          <img
            src={this.state.picture}
            alt={this.state.name}
            style={{
              width: "50px"
            }}
          />
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          // cssClass="login"
          // appId="548985249192967"
          appId="590064224865678"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={this.logOut}
          callback={this.responseFacebook}
          // redirectUri='http://localhost/user'
          // cssClass="small"
          size="small"
          icon="fa-facebook-square fa-2x "
          textButton="Login"
          buttonStyle={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            fontSize: "10px",
            padding: "5px",
            borderRadius: "10px"
          }}
        />
      );
    }

    return (
      <div>
        <Container className='login-container d-flex'>
          {fbContent}
          <button style={{
           background:'transparent',
           boxShadow:'none',
           border:'none'
  
          }} onClick={this.logOut} className=''>Logout</button>
        </Container>
      </div>
    );
  }
}
