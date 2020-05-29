import React, { Component } from "react";
import "./styles/imageuploader.css";
import "./styles/profile.css";
const token = localStorage.getItem('Token');
let id = localStorage.getItem('id');
const url = "http://localhost:8000/media"

export default class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            user: null,
            service: null,
            imgUrl: ""
        };
    }

    _handleSubmit(e) {
         
            let fd = new FormData();
            if (this.props.urlProps == "/settings")
            fd.append('user', this.state.user);
            else{
                fd.append('service', this.state.service);
            }
            fd.append('image', this.state.image);
            e.preventDefault();
            console.log(`${fd.get('user')} ${fd.get('image')}`)
            if (this.state.image)
                fetch('http://localhost:8000/media/upload/', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                    body: fd
                }).then(res => {

                    window.location.reload(false)
                    localStorage.removeItem('User')
                    console.log(this.state);
                    return res.json()
                });
        
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {

            if(!this.props.service)
            this.setState({
                image: file,
                user: id,
                imgUrl: reader.result,
            });
            else{
                this.setState({
                    image: file,
                    service: this.props.service,
                    imgUrl: reader.result,
                });
            }
        }
        console.log(this.state);
        console.log(this.props);
        if (file)
            reader.readAsDataURL(file)
    }


    render() {
        return (
            <div className="col-12">
                {this.props.urlProps == "/settings" ?
                    <img
                        class="profile-img mr-5"
                        src={this.state.imgUrl ? this.state.imgUrl : this.props.image ? url + this.props.image : ""}
                        width="128" height="128" /> :
                    <div>
                    <div className="col-6">
                        <img
                    class="profile-img mr-5 "
                    src={this.state.imgUrl ? this.state.imgUrl : this.props.image ? url + this.props.image : ""}
                    width="128" height="128" />
                   </div></div>}
                   
                <div className="previewComponent col-12">
                    <form class = "" onSubmit={(e) => this._handleSubmit(e)}>
                        <input type="file" accept="image/*" name="file" id="file" class="inputfile" onChange={(e) => this._handleImageChange(e)} />
                        <label for="file" class="btn btn-primary mt-2"  >   Choose a file   </label>
                    </form>
                    <button className="btn btn-primary "
                        type="submit"
                        onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                </div>
         
            </div>
        )
    }
}
