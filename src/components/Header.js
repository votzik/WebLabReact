import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./styles/main.css";
import LoginedUser from "./LoginedUser"

const url = "http://localhost:8000/media"
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("Token") || "",
            id: null,
            username: "",
            first_name: "",
            last_name: "",
            last_login: null,
            date_joined: null,
            image: null,
            fetched: false,
            redirect: null,
        }
    }

    componentDidMount() {

        if (this.state.token) {
          fetch('http://localhost:8000/users/me/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${this.state.token}`,
            }
          }).then(res => res.json()).then(data => {
              if(!data.detail){
            console.log(data);
            this.setState(data);
            localStorage.setItem('id', this.state.id);
            this.setState({ fetched: true });
            this.setState({image: data.image[data.image.length-1].image});
            console.log(this.state);
              }
          })
          
        }
      }

    logOut = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/auth/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.state.token}`,
            }
        }).then(res => {
            localStorage.removeItem("Token");
            localStorage.removeItem("id")
            this.setState({ token: "" })
            this.setState({redirect: "/"})
        });

    }


    render() {

        return (
            <div className="wrap-s">
                {this.state.redirect? 
     <Redirect to={this.state.redirect} />:""}
  
                <div className="fixed-menu">
                    <ul className="menu-main">
                    {this.state.token && this.state.fetched ?
                            <LoginedUser 
                            username={this.state.username} 
                            img = {url + this.state.image}/> :
                            ""}
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {!this.state.token ?
                            <li><Link to="/register">Register</Link></li> :
                            <li><Link to="/" onClick={this.logOut}>Logout</Link></li>}
                        {!this.state.token ?
                            <li><Link to="/login">Login</Link></li> :
                            ""}
                    </ul>
                </div>
            </div>
        )
    }
}