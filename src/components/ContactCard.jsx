import React from "react";
import delIcon from "../assets/img/delete-icon.png";
import userIcon from "../assets/img/user-icon.png";
import "../assets/css/ContactCard.css";

// const ContactCard = ({ contact })
const ContactCard = (props) => {
  // object destructing properties
  const { id, name, email } = props.contact;

  return (
    <>
      <div className="contactCard">
        <div className="contactCard__contact">
          <img
            className="contactCard__userIcon"
            src={userIcon}
            alt="user-icon"
          />
          <div className="contactCard__userName">
            {/* <h2>{contact.name}</h2> */}
            <h2>{name}</h2>
            {/* <p>{contact.email}</p> */}
            <p>{email}</p>
          </div>
        </div>
        <div className="contactCard__delIcon">
          <img
            src={delIcon}
            alt="del-icon"
            onClick={() => props.clickHandler(id)}
          />
        </div>
      </div>
    </>
  );
};

export default ContactCard;
