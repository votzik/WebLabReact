import React, { Component } from "react";
import "./styles/main.css" 

const numberRegex = RegExp(
  /^[0-9]*$/
);

const token = localStorage.getItem("Token");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media/images/";

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

export default class createProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      price: "",
      category: "",
      formErrors: {
        title: "",
        description: "",
        price: "",
      },

    };
  }

  componentWillMount() {
    if (!isLogined) {
      this.props.history.push("/");
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    let formErrors = { ...this.state.formErrors };
    console.log(this.state);

    switch (name) {
      case "title":
        formErrors.title =
          value.length < 3 || value.length >14 ? "minimum 3 characaters and less then 14 required" : "";
        break;
      case "description":
        formErrors.description =
          value.length < 20 || value.length > 255 ? "minimum 20 and less then 255 characaters required" : "";
        break;
      case "price":
        formErrors.price = numberRegex.test(value) && +value < 1000000
          ? ""
          : "must be a number and less then 1000000";

        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

  };

  onSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      let fd = new FormData();
      fd.append('title', this.state.title);
      fd.append('description', this.state.description);
      fd.append('price', this.state.price);
      fd.append('category', this.state.category);

      fetch('http://localhost:8000/services/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
        },
        body: fd
      }).then(res => {
        this.props.history.push("/myProducts")
        return res.json()
      })
    }
  };



  render() {
    let formErrors = { ...this.state.formErrors };
    return (
      <div class="createproductContainer mmt text-center cA text-center white-text">
        <div className="">
          <h2 class="card-title mb-0 text-center">Create product</h2>
        </div>
        <main>
          <div class="card-body">
            <form onSubmit={this.onSubmit}>
              <div class="row">
                <div class="col-md-8">

                  <div class="form-group text-left">
                    <label for="inputUsername">Product title</label>
                    <textarea
                      rows="2"
                      class="form-control"
                      id="inputBio"
                      name="title"
                      placeholder="Product title"
                      onChange={this.handleChange}
                    ></textarea>
                    {formErrors.title.length > 0 && (
                      <span className="errorMessage red">
                        {formErrors.title}
                      </span>
                    )}
                  </div>

                  <div class="form-group text-left">
                    <label for="inputUsername">Product description</label>
                    <textarea
                      rows="2"
                      class="form-control"
                      name="description"
                      id="inputBio"
                      placeholder="Product description"
                      onChange={this.handleChange}
                    ></textarea>
                    {formErrors.description.length > 0 && (
                      <span className="errorMessage red">
                        {formErrors.description}
                      </span>
                    )}
                  </div>

                  <div class="form-group text-left">
                    <label for="inputUsername">Price</label>
                    <textarea
                      rows="2"
                      class="form-control"
                      id="inputBio"
                      name="price"
                      placeholder="Price"
                      onChange={this.handleChange}
                    ></textarea>
                    {formErrors.price.length > 0 && (
                      <span className="errorMessage red">
                        {formErrors.price}
                      </span>
                    )}
                  </div>

                  <div class="form-group text-left">
                    <label for="inputUsername">Category</label>
                    <select class="custom-select d-block w-100" id="country" required=""
                      name="category"
                      onChange={this.handleChange}>
                      <option value="">Choose category</option>
                      <option>Business</option>
                      <option>Digital marketing</option>
                      <option>Graphics and design</option>
                      <option>Music and audio</option>
                      <option>Programming and tech</option>
                      <option>Video and animation</option>
                      <option>Writing and translation</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <button type="submit" class = "btn-primary btn">Create</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
