// Default Export Module
import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

// Contact Array of Objects
const staticContactList = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
  },
];

const App = () => {
  // Use the parathesis () wrapper to wrap the JSX inside the Component, if returning from than one JSX Element.
  return (
    <>
      <div className="app">
        {/* Call the Component as Custom HTML Element with Self-Closing or Separate Closing Tag */}
        <Header />
        <AddContact />
        {/* Passing the Array of Object and assigning it to Object Prop Variable */}
        <ContactList staticContactList={staticContactList} />
      </div>
    </>
  );
};

export default App;
