import React, { Component } from "react";
import "./styles/main.css";
import Card from "./Card";
import Footer from "./Footer"
import photo from "./assets/bg2.jpg"

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="wrap-s">

                    <div className="text-mine text-align-center" >
                        <h1>Wanderlance</h1>
                        <div className="subtext">
                            A site where you can offer others your hobby
                </div>
                    </div>
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="Search" />
                            <button type="submit" className="searchButton" >
                                <i className="fa fa-search" ></i>
                            </button>
                        </div>
                    </div>
                    <ul className="cards-mine">
                        <li>
                            <Card image={photo}
                            title="Програмер"
                            description="Ну він тоже програмує"></Card>
                        </li>
                        <li>
                        <Card image={photo}
                            title="Програмер"
                            description="Ну він тоже програмує"></Card>
                        </li>
                        <li>
                        <Card image={photo}
                            title="Програмер"
                            description="Ну він тоже програмує"></Card>
                        </li>

                        <li>
                        <Card image={photo}
                            title="Програмер"
                            description="Ну він тоже програмує"></Card>
                        </li>
                        <li>
                        <Card image={photo}
                            title="Програмер"
                            description="Ну він тоже програмує"></Card>
                        </li>
                        <li>
                        <Card image={photo}
                            title="Програмер"
                            description="Ну він тоже програмує"></Card>
                        </li>
                    </ul>



                </div>

                <Footer></Footer>

            </div>
        )
    }
}