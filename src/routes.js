import {Switch, Route} from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register"
import About from "./components/About";
import Userprofile from "./components/Userprofile"
import Settings from "./components/settings";
import MyProducts from "./components/MyProducts";
import createProduct from "./components/createProduct"
import UploadProductPhoto from "./components/UploadProductPhoto";

export default class Routes extends Component{
    render() {
        return (
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
            <Route exact path="/userprofile" component={Userprofile} />
            <Route exact path="/userprofile/:id" component={Userprofile} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/myproducts" component={MyProducts} />
            <Route exact path="/myproducts/createproduct" component={createProduct} />
            <Route exact path="/myproducts/upload/:id" component={UploadProductPhoto} />
          </Switch>
        );
    }
}