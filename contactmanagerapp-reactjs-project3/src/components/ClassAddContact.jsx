// import the Structural Class Component from React Module
import React, { Component } from "react";
import "../assets/css/AddContact.css";
// import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
// import history from "history";
// import { hashHistory } from "react-router";
// import { withRouter } from "react-router";

class AddContact extends Component {
  // Using class state object and setState Setter function
  state = {
    id: uuid(),
    name: "",
    email: "",
  };

  // OnSubmit callback function
  // method declared without keyword in class component
  // “e” is a short variable reference to an event object provided to the event handlers. The event object generally offers certain useful methods and properties that the event handlers can utilize. For instance, we will use the “which” property of the event handler to determine which event is triggered or target of the event to set the value.
  add = (e) => {
    // when using a button, run the function, don't load the page on submit
    e.preventDefault();
    // if condition, either is empty, then run alert function
    // strict check === & OR || & AND && Operators.
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are required!");
      return;
    }
    // you can call & access the function inside the function by this.props.nameofHandler(contact)
    this.props.addContactHandler(this.state);
    // Debugging
    // console.log(this.state);
    // Once added, please clear out the fields.
    this.setState({ name: "", email: "" });
    console.log(this);
    // Programmatically Navigation from One Component to Another Component
    // const navigate = useNavigate();
    this.props.history.push("/");
    // hashHistory.push('/');
    // Navigate('/')
  };

  // render method in class component
  // In JavaScript, "this" keyword refers to an object.
  // Which object depends on how this is being invoked (used or called).
  // "this" keyword refers to different objects depending on how it is used: In an object method, this refers to the object. Alone, this refers to the global object.
  // Here, it refers to the class object.

  render() {
    return (
      <div className="contactForm">
        <h2 className="contactForm__title">Add Contact</h2>
        <div className="contactForm__form">
          <form action="/" method="post" onSubmit={this.add}>
            <div className="contactForm__nameField">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                id="name"
                // value assigment as class object state item
                // Here, it refers to the class object.
                value={this.state.name}
                // when filling the input value filed, it will be set to the class state, then assigned to the value of the field as an object property.
                // Here, it refers to the class object.
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="contactForm__emailField">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
                // value assigment as class object state item
                // Here, it refers to the class object.
                value={this.state.email}
                // when filling the input value filed, it will be set to the class state, then assigned to the value of the field as an object property.
                // Here, it refers to the class object.
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            {/* <Navigate to="/add"> */}
            <button className="contactForm__button">Add</button>
            {/* </Navigate> */}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AddContact);
