// import the Structural Class Component from React Module
import React, { Component } from "react";
import "../assets/css/AddContact.css";

class AddContact extends Component {
  // Using class state and setState
  state = {
    id: "",
    name: "",
    email: "",
  };

  // OnSubmit callback function
  // method declared without keyword in class component
  add = (e) => {
    // run the function, don't load the page on submit
    e.preventDefault();
    // if condition, either is empty, then run alert function
    // strict check === & OR || & AND && Operators.
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are required!");
      return;
    }
    // call & access the function inside the function
    this.props.addContacthandler(this.state);
    this.setState({ name: "", email: "" });
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
                // class object state item
                value={this.state.name}
                // when filling the input value filed, it will be set to the class state, then assigned to the value of the field as an object property.
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
                // class object state item
                value={this.state.email}
                // when filling the input value filed, it will be set to the class state, then assigned to the value of the field as an object property.
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <button className="contactForm__button">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
