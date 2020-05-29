import React, { Component } from "react";
import photo from "./assets/default.jpg"
import "./styles/profile.css";
import { Link } from "react-router-dom";

const token = localStorage.getItem("Token");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media";
let orders;

  

let stat;
let ids;

export default class Userprofile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            username: "",
            first_name: "",
            last_name: "",
            last_login: null,
            date_joined: null,
            fetched: false,
            image: null,
        };
    }

    componentDidMount() {
        if (!isLogined) {
            this.props.history.push("/");
        }
        else {
            const { id } = this.props.match.params;
            ids = id;
            if (!id) {
                fetch("http://localhost:8000/users/me/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                })
                    .then((res) =>   res.json())
                    .then((data) => {
                        if (!data.detail) {
                            console.log(data);
                            this.setState(data);
                           
                            if(data.image)
                            this.setState({ image: data.image[data.image.length - 1].image });
                            console.log(this.state);

                            this.setState({ fetched: true });
                        }
                    });

            }
            else {
                
                fetch(`http://localhost:8000/users/${id}/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                })
                    .then((res) => {
                        stat = res.status;
                        if (res.ok)
                            return res.json()
                    })
                    .then((data) => {
                        if (stat <= 400) {
                            console.log(data);
                            this.setState(data);
                            this.setState({ fetched: true });
                            if(data.image.length >0)
                            this.setState({ image: data.image[data.image.length - 1].image });
                            console.log(this.state);
                        }
                    });
            }
        }
    }


    render() {
        return (

            <div class="container emp-profile">
                {this.state.fetched ?
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img src={this.state.image.length > 0?url + this.state.image:photo} alt="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <h5>
                                        {this.state.username}
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>

                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                {!ids?<Link to="/settings" class="profile-edit-btn" name="btnAddMore"  >Edit Profile</Link>:""}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-work">
                                    <p>WORK LINK</p>
                                    <a href="">Website Link</a><br />
                                    <a href="">Bootsnipp Profile</a><br />
                                    <a href="">Bootply Profile</a>
                                    <p>SKILLS</p>
                                    <a href="">Web Designer</a><br />
                                    <a href="">Web Developer</a><br />
                                    <a href="">WordPress</a><br />
                                    <a href="">WooCommerce</a><br />
                                    <a href="">PHP, .Net</a><br />
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.username}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.first_name} {this.state.last_name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Last login</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.last_login?this.state.last_login.slice(0, 10):""}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label>Your Bio</label><br />
                                                <p>Your detail description</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> :""
                }
            </div>

        )
    }
}
