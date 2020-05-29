import React, { Component } from "react";

import ImageUploader from "./ImageUploader"
import Card from "./Card"

import "./styles/main.css"

const token = localStorage.getItem("Token");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media";

export default class UploadProductPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: null,
      description: null,
      price: null,
      date: null,
      image: null,
      category: {
        name: null,
        description: null,
      },
      owner: null,
      fetched: false
    };
  }

  componentDidMount() {
    if (isLogined) {

      const { id } = this.props.match.params
      fetch(`http://localhost:8000/services/${id}/`, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState(data);
          console.log(this.state);
          this.setState({ fetched: true })
        });

    }
  }
  render() {
    return (
      <div class="container mmt text-center">


        <h2 class="card-title mb-3 ml-5 text-center">Title photo</h2>
       
        {this.state.fetched?<ul className="cards-mine">
          <li><Card
            title={this.state.title}
            image = {this.state.image.length>0?url + this.state.image[this.state.image.length - 1].image:""}
            description={this.state.description}
            price={this.state.price}
          /></li>
           <hr ></hr>
           <p className= "col-12">Press the button to upload photo</p>
           <div className="col-md-3 text-center">
            
        <ImageUploader
                urlProps={this.props.match.path}
                image={this.state.owner ? this.state.owner.image[this.state.owner.image.length - 1].image : ""}
                service={this.state.id} />

                </div>
     
        </ul>:""}
        
      </div>
    );
  }
}
