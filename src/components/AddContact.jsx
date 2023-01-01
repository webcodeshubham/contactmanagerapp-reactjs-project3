// import the Structural Class Component from React Module
import React, { Component } from "react";
import "../assets/css/AddContact.css";

class AddContact extends Component {
  render() {
    return (
      <div className="contactForm">
        <h2 className="contactForm__title">Add Contact</h2>
        <div className="contactForm__form">
          <form action="/" method="post">
            <div className="contactForm__nameField">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                id="name"
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
              />
            </div>
            <button className="contactForm__button">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
