import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./styles/main.css"
import "./styles/register.css"


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const passwordRegex = RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
);


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};


export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            email: null,
            password2: null,
            formErrors: {
                username: "",
                password: "",
                email: "",
                password2: "",
            },
            resp: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();


        if (formValid(this.state)) {
            fetch('http://127.0.0.1:8000/auth/register/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(this.state)

            }).then(response => {
                console.log(response.status);
                if (response.ok) {
                    this.props.history.push("/");
                }
                return response.json();
            }).then(data => {
                console.log(data);
                data.detail ? this.setState({ resp: data.detail }) : this.setState({ resp: data.username });
                console.log(this.state.resp);
            })

        }

    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        let valuen;
        switch (name) {
            case "username":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                     !passwordRegex.test(value) ?  "minimum 8 characaters required and must contain number and big letter" :"";
                formErrors.password2 =
                    value !== this.state.password2 ? "paswords dont match" : "";
                break;
            case "password2":
                formErrors.password2 =
                    value !== this.state.password ? "paswords dont match" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };


    render() {
        let formErrors = this.state.formErrors
        return (
            <div class="register-photo">
                <div class="form-container">
                    <div class="image-holder">
                    </div>
                    <form method="post" onSubmit={this.handleSubmit}>
                        <h2 class="text-center"><strong>Create</strong> an account.</h2>
                        <div class="form-group">
                            <input type="username"
                                class="form-control"
                                name="username"
                                placeholder="Username"
                                onChange={this.handleChange} />
                            {formErrors.username.length > 0 && (
                                <span className="errorMessage red">
                                    {formErrors.username}
                                </span>
                            )}
                        </div>
                        <div class="form-group">
                            <input type="email"
                                class="form-control"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange} />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage red">{formErrors.email}</span>
                            )}

                        </div>
                        <div class="form-group">
                            <input type="password"
                                class="form-control"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange} />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage red">
                                    {formErrors.password}
                                </span>
                            )}</div>
                        <div class="form-group">
                            <input type="password"
                                class="form-control"
                                name="password2"
                                placeholder="Password (repeat)"
                                onChange={this.handleChange} />
                            {formErrors.password2.length > 0 && (
                                <span className="errorMessage red">
                                    {formErrors.password2}
                                </span>
                            )}</div>
                        <div class="form-group">
                            <div class="form-check"><label class="form-check-label">
                                <input type="checkbox"
                                    class="form-check-input" />I agree to the license terms.</label></div>
                        </div>
                        <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Sign Up</button>
                        <span className="errorMessage red">
                                    {this.state.resp}
                                </span>
                        </div><Link to="/login">You already have an account? Login here.</Link>
                    </form>
                </div>
            </div>
        )
    }
}