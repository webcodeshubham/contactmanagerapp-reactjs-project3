// Default Export Module
import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  // Setting a key/variable to get the data from the localStorage.
  const LOCAL_STORAGE_KEY = "contacts";
  // Dynamic Contact Array of Objects with initial value as an empty array.
  const [contacts, setContacts] = useState([]);

  // Passing FunctionHandler as a Prop Attribute to AddContact Component to fetch the class state.
  // this will run on line 69 and will take function as a prop handler into AddContact Component.
  // here contact alias as this.state.
  const addContactHandler = (contact) => {
    // console.log(contact);
    // existing contact objects inside contacts (Arrayof Objects) and new one called from addContact component and spreading using spread operator inside contacts (Arrayof Objects).
    // ...NameofObject(ArrayofObjects)
    // ...contacts = contactObject1, contactObject2, contactObject3,... & also new contact object.
    // Storing Contact Object in Contacts ArrayOfObjects => ...contacts =>
    // ([ {id: 1, name: "Shubham", email: "shubham@gmail.com"},
    // {id: 2, name: "Shubh", email: "shubh@gmail.com"},
    // {id: 3, ...contact (Object Destructing) => name: "hub", email: "hub@gmail.com"} ]).
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  //Function as a Prop to getContactId from ContactList
  const removeContactHandler = (id) => {
    //run and array filter method one by one and store in newContactList Variable.
    const newContactList = contacts.filter((contact) => {
      // return me all the contact objects, whose id should not match from
      // the recieved id from contactList Component.
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // run the function snippet, when this hook runs, &whenever dependency array changes.
  useEffect(() => {
    // Use the JavaScript function JSON.parse() to convert text into a JavaScript object: const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}'); Make sure the text is in JSON format, or else you will get a syntax error.
    const retrieveContacts = JSON.parse(
      // get all contacts objects from the localStorage database/browser memory.
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    // if the data exits in the localStorage database, then set the contacts objects to contacts state variable.
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  // run the function snippet, when this hook runs, &whenever dependency array changes.
  useEffect(() => {
    // set all contacts objects into the key/variable (LOCAL_STORAGE_KEY) of the localStorage & database/browser memory.
    // The JSON.stringify() static method converts a JavaScript value to a JSON string.
    // StackOverflow Error1 :- https://stackoverflow.com/questions/74993574/localstorage-getitem-method-is-not-retrieving-data
    // All useEffects are run for one time at the time of rendering. So initially your contacts state is [] and you are storing it into localStorage. So to solve it, try adding simple if check while storing into localStorage.
    // https://upmostly.com/tutorials/why-is-my-useeffect-hook-running-twice-in-react

    // this useEffect will run, but will check the initial value of contacts array. As Initial value is empty, hence it won't set anything. If condition is not given, then it will set empty value in localStorage.
    if (contacts.length) {
      // Only store if contacts is not empty
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  // Use the parathesis () wrapper to wrap the JSX inside the Component, if returning from than one JSX Element.
  return (
    <>
      <div className="app">
        {/* Call the Component as Custom HTML Element with Self-Closing or Separate Closing Tag */}
        <Router>
          <Header />
          {/* Error:- You likely to forgot to export your component file it's defined in, or you might have mixed up named or default component. You can't call the Component, if you haven't created them. */}
          <Routes>
            <Route
              exact
              path="/add"
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            {/* <AddContact addContactHandler={addContactHandler} /> */}
            {/* Passing the Array of Object and assigning it to Object Prop Variable */}
            {/* <ContactList staticContactList={staticContactList} /> */}
            {/* Function as a Prop and get the Contact ID from Contact List Component */}
            <Route
              exact
              path="/"
              element={
                <ContactList
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              }
            />
            {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
            <Route exact path="/contact" element={<ContactDetail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
