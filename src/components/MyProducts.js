import React, { Component } from "react";


import Card from "./Card";
import "./styles/main.css";

const token = localStorage.getItem("Token");
let orders;
const url = "http://localhost:8000/media";
function Generate(){
  if(orders){
      return(<ul className = "row col cards-mine ">
        {orders.map(order => <li><Card
        id = {order.id}
        title = {order.title}
        description = {order.description}
        price = {`${order.price} $`}
        image = {order.image.length>0?url + order.image[order.image.length - 1].image:""}
        noButton = {true}
        /></li>)}
      </ul>)
    
  }
}

export default class MyProducts extends Component {
   constructor(props){
     super(props);
       this.state = {
         fetched: false
     };
   };
  
   componentWillMount() {
    if (!token) {
      this.props.history.push("/");
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/services/my/', {
      method: 'GET',
      headers: {
          'Authorization': `Token ${token}`,
      },
  }).then(res => {
      return res.json()
  }).then(data => {
    if(!data.detail){
    orders = data;
    this.setState({fetched: true})
    console.log(orders);
    }
  })

  }
  render() {
    return (
      <div class="  mmt">
        <div >
          <h2 class="card-title text-center">My products</h2>
        </div>
        <main>
        <h4 class="card-title mb-3 mb-0 text-center"> {orders?`Your products on this account` :""} </h4>
        <div class="text-center">
        <button type="submit" class="text-center btn btn-primary mb-5" onClick={(event) => (window.location.href = "/myProducts/createProduct")}>Create product</button>
        </div>
          {this.state.fetched?<Generate></Generate>:""}

        </main>
      </div>
    );
  }
}
