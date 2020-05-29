import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/ourseller.css"


export default class LoginedUser extends Component{

    render(){
        return(
            <div className="btn-group rounded-circle size red ">
                        
                        <div
                          type="link"
                          className="btn dropdown-toggle "
                          data-toggle="dropdown"
                        >
                          <figure className="fir-image-figure">
                            <a
                              className="fir-imageover"
                              rel="noopener"
                              target="_blank"
                              href="/userProfile"
                            >
                              <div className="fir-imageover-color"></div>
                              <img
                                className="fir-imageover-image fir-clickcircle fir-circle"
                                src={this.props.img}
                              />
                            </a>
                          </figure>
                          <div>
                      </div>
                        </div>
                        <div className="dropdown-menu">
                          <div>
                            <figure className="fir-image-figure ">
                              <Link
                                className="fir-imageover"
                                to="/userprofile"
                              >
                                <img
                                  className="fir-author-image fir-clickcircle fir-margin"
                                  src={this.props.img}
                                />
                                
                              </Link>
        
                              <figcaption>
                                <div className="fig-author-figure-title white-text ">
                                  {this.props.username} 
                                </div>
                              </figcaption>
                            </figure>
                          </div>
                          <div className="dropdown-divider"></div>
                          <Link to="/myorders" className="dropdown-item colorLink">
                            <i className="fa fa-shopping-cart iconRed"aria-hidden="true"></i>
                            My orders
                          </Link>
                          <Link to="/myproducts" className="dropdown-item colorLink">
                            <i className="fa fa-money iconRed" aria-hidden="true"></i>
                            My products
                          </Link>
                          <a href="#" className="dropdown-item colorLink">
                            <i className="fa fa-comment iconRed" aria-hidden="true"></i>
                            Messages
                          </a>
                          <Link to="/settings" className="dropdown-item colorLink">
                            <i className="fa fa-cog iconRed" aria-hidden="true"></i>
                            Settings
                          </Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/clientOrders" className="dropdown-item colorLink">
                            <i className="fa fa-user iconRed"aria-hidden="true"></i>
                            Client orders
                          </Link>
                        </div>
                      </div>
          )
    }
}

