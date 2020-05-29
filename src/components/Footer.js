import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./styles/main.css";

export default class Footer extends Component{
    render(){
        return(
            
            <div className="footer-wrap">
            <footer className="card-footer bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 item">
                            <h5>Services</h5>
                            <ul className="foot-list">
                                <li><Link to="/">Web design</Link></li>
                                <li><Link to="/">Development</Link></li>
                                <li><Link to="/">Hosting</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h5>About</h5>
                            <ul className="foot-list">
                                <li><Link to="/">Company</Link></li>
                                <li><Link to="/">Team</Link></li>
                                <li><Link to="/">Legacy</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h5>Support</h5>
                            <ul className="foot-list">
                                <li><Link to="/">Get in touch</Link></li>
                                <li><Link to="/">Q/A</Link></li>
                                <li><Link to="/">Forgot password</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="copyright text-center">WanderLance ©2020</p>

            </footer>
        </div>
        )
    }
}