import React from "react";
import "../assets/css/ContactList.css";
import ContactCard from "./ContactCard";

// const staticContactList = [
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
  // console.log(props(In-built Object).staticContactList(Array Assigned to Varibale as Parameters/Arguments))

  // const renderContactList = props.staticContactList.map((contact) => {
  //   return (
  //     <>
  //       <h1>{contact.id}</h1>
  //       <h1>{contact.name}</h1>
  //       <h1>{contact.email}</h1>
  //     </>
  //   );
  // });

  const renderContactList = props.staticContactList.map((contact) => {
    return (
      <>
        <ContactCard contact={contact}/>
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
