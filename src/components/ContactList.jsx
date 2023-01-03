import React from "react";
import "../assets/css/ContactList.css";
import ContactCard from "./ContactCard";

// Reference Array of Objects for Contacts

// const staticContactList/contacts = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "johndoe@example.com",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     email: "jane@example.com",
//   },
// ];

const ContactList = (props) => {
  // console.log(props)

  // console.log(props.staticContactList)
  // #1. props ==> (In-built Object in every react component).
  // #2. staticContactList ==> properties (props) --> KEYs --> (Args/Attributes) ==> staticContactList(Array Assigned to Varibale as Parameters/Arguments).

  // function declared to render the contact array items i.e. contact objects.

  // Array of Object  = props.staticContactList
  // Array of Object  = props.contacts
  // contact = { name: "", email: ""}

  // ==> ContactCard Component is not defined

  // const renderContactList = props.staticContactList.map((contact) => {
  //   return (
  //     <>
  //       <h1>{contact.id}</h1>
  //       <h1>{contact.name}</h1>
  //       <h1>{contact.email}</h1>
  //     </>
  //   );
  // });

  // ==> ContactCard Component is defined

  // const renderContactList = props.staticContactList.map((contact) => {
  //   return (
  //     <>
  //       <ContactCard contact={contact}/>
  //     </>
  //   );
  // });

  const renderContactList = props.contacts.map((contact) => {
    return (
      <>
        <ContactCard contact={contact} />
      </>
    );
  });

  return (
    <>
      <div className="contactList">
        <h2 className="contactList__title">Contact List</h2>
        <div className="contactList__container">
          {/* Calling Reference Variable in JSX, Don't want to Execute the Function */}
          {renderContactList}

          {/* // Rendering List of Array Elements using Map Methods */}
          {/* {props.staticContactList.map((contact) => {
            return (
              <>
                <h1>{contact.id}</h1>
                <h1>{contact.name}</h1>
                <h1>{contact.email}</h1>
              </>
            );
          })} */}

          {/* {staticContactList.map((contact) => {
            return (
              <ContactCard
                key={contact.id}
                name={contact.name}
                email={contact.email}
              />
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default ContactList;
