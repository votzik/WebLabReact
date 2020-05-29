import React, { Component } from "react";
import "./styles/login.css"
import "./styles/main.css"

export default class Login extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
        };

      }

      onSubmit = (e) => {
        e.preventDefault();
    
        console.log(this.state);
    
        fetch("http://127.0.0.1:8000/auth/login/", {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.detail) {
              console.log(data.detail);
            } else {
              console.log(data);
              localStorage.setItem("Token", data.Token);
              this.props.history.push("/");
              window.location.reload(false);
            }
          });
      };

      handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value,
        });
        console.log(this.state);
      };

    render(){
        return(
            <div class="login-clean">
            <form method="post" onSubmit={this.onSubmit}>
                <h2 class="sr-only">Login Form</h2>
                <div class="illustration"><i class="icon ion-ios-navigate"></i></div>
                <div class="form-group"><input class="form-control"   placeholder="Username"
                  type="text"
                  name="username"
                  noValidate
                  onChange={this.handleChange} />
                </div>
                <div class="form-group"><input class="form-control" placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange} /></div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Log In</button></div><a
                    class="forgot" href="#">Forgot your email or password?</a>
            </form>
        </div>
        )
    }
}