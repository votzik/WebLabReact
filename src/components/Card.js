import "./styles/main.css";
import React, { Component } from "react";
import photo from "./assets/bg2.jpg"
import "./styles/main.css"
const token = localStorage.getItem("Token");

export default class Card extends Component{
    constructor(props){
      super(props);
      this.state = {
          deleted: false
      };
    }
    render(){
        return(
           
            <div className="card-mine">
            {!this.state.deleted?<div><img src={this.props.image?this.props.image:photo} />
            <div className="container-mine">
                <h4><b> {this.props.title}</b></h4>
                <p>{this.props.description?this.props.description.slice(0,30):""}</p>
                <p>{this.props.price}</p>
                {!this.props.noButton?<button className="btn btn-primary" type="button">Buy service</button>:
                <div>
                    <button className="btn btn-primary mb-2" type="button"
                        onClick={(event) =>
                            fetch(`http://localhost:8000/services/${this.props.id}/`,{
                              method: "DELETE",
                              headers:{
                               'Authorization': `Token ${token}`,
                              }
                             
                            }).then(this.setState({deleted: true}))
                           }
                    >Delete this service</button>
                    <button className="btn btn-primary"  onClick={(event) =>
              (window.location.href = `/myproducts/upload/${this.props.id}`)
            }type="button">Change product image</button>
                    </div>
                }
            </div></div>:""}
        </div>
        )
    }
}