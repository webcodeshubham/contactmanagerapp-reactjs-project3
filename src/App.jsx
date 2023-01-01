// Default Export Module
import React from "react";
import './App.css'
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const App = () => {
  // Use the parathesis () wrapper to wrap the JSX inside the Component, if returning from than one JSX Element.
  return (
    <>
      <div className="app">
        {/* Call the Component as Custom HTML Element with Self-Closing or Separate Closing Tag */}
        <Header />
        <AddContact />
        {/* <ContactList /> */}
      </div>
    </>
  );
};

export default App;
