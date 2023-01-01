import React from "react";
import delIcon from "../assets/img/delete-icon.png";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div className="contactCard" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="contact">
          <h2>{contact.name}</h2>
          <h4>{contact.email}</h4>
        </div>
        <div className="del-icon">
          <img style={{ width: "2.5vw"}} src={delIcon} alt="del-icon" />
        </div>
      </div>
    </>
  );
};

export default ContactCard;
