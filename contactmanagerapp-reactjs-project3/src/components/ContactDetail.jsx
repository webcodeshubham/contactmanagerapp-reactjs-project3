import React from "react";
import profileImg from "../assets/img/profile-pic.jpg";
import "../assets/css/ContactDetail.css";
import "../assets/css/AddContact.css";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  // console.log(props)
  const { name, email } = props.location.state.contact;
  return (
    <>
      <div className="container">
        <div className="contactDetailCard">
          <img
            src={profileImg}
            alt="profileImg"
            className="contactDetailCard__Img"
          />
          <div className="contactDetailCard__Details">
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>
        <Link to="/">
          <button className="contactForm__button">Add</button>
        </Link>
      </div>
    </>
  );
};

export default ContactDetail;
