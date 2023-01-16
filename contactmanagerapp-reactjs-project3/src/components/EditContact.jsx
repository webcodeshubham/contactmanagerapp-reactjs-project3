import React, { useState } from "react";
import "../assets/css/EditContact.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const EditContact = (props) => {
  const [id, setId] = useState(uuid());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const contact = {
    id: id,
    name: name,
    email: email,
  };

  const navigate = useNavigate();
  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are required!");
      return;
    }
    props.EditContactHandler(contact);
    setName("");
    setEmail("");
    console.log(props);
    navigate("/");
  };

  return (
    <div className="contactForm">
      <h2 className="contactForm__title">Add Contact</h2>
      <div className="contactForm__form">
        <form action="/" method="post" onSubmit={update}>
          <div className="contactForm__nameField">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="contactForm__button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
