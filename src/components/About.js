import React, { Component } from "react";
import "./styles/main.css"
import Card from "./Card";
import Footer from "./Footer"

import photo1 from "./assets/puh.jpg"
import photo2 from "./assets/buff.jpg"
import photo3 from "./assets/wat.jpg"
import photo4 from "./assets/yura.jpg"
import photo5 from "./assets/me.jpg"

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="text-mine ml-3 mb-3" >
                    <h1>Our team</h1>
                    <div className="subtext">
                        Here you can look at our immpressive team and it`s members
                    </div>
                </div>
                <ul className="cards-mine">
                    <li>
                        <Card image={photo1}
                            title="Pushok"
                            description="Дизайнер"
                            noButton={true}></Card>

                    </li>
                    <li>
                        <Card image={photo2}
                            title="Buffdan"
                            description="Пише джанго на джанго для джанго"
                            noButton={true}></Card>
                    </li>
                    <li>
                        <Card image={photo3}
                            title="Reitar"
                            description="Дизайнер дизайнера"
                            noButton={true}></Card>
                    </li>

                    <li>
                        <Card image={photo4}
                            title="Yurii"
                            description="він спить не будіть його"
                            noButton={true}></Card>
                    </li>
                    <li>
                        <Card image={photo5}
                            title="Ігор"
                            description="Це Ігор"
                            noButton={true}></Card>
                    </li>
                </ul>
               
               <Footer></Footer>

            </div>
        )
    }
}