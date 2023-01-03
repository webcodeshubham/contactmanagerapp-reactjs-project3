// Default Export Module
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

// Example - 1 => Static Contact Array of Objects
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

// Example - 2 => Static Contact Array of Objects
// const contacts = [
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

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  // Dynamic Contact Array of Objects
  const [contacts, setContacts] = useState([]);

  const addContacthandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Use the parathesis () wrapper to wrap the JSX inside the Component, if returning from than one JSX Element.
  return (
    <>
      <div className="app">
        {/* Call the Component as Custom HTML Element with Self-Closing or Separate Closing Tag */}

        <Header />

        {/* Error:- You likely to forgot to export your component file it's defined in, or you might have mixed up named or default component. You can't call the Component, if you haven't created them. */}
        <AddContact addContacthandler={addContacthandler} />

        {/* Passing the Array of Object and assigning it to Object Prop Variable */}

        {/* <ContactList staticContactList={staticContactList} /> */}

        <ContactList contacts={contacts} />
      </div>
    </>
  );
};

export default App;
