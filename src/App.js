import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Header } from "./components/Header";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";

export function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactValorQualquer = contact => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactValorQualquer = id => {
    const newContactList = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="container">
      <Header />
      <AddContact addContactValorQualquer={addContactValorQualquer} />
      <ContactList
        contacts={contacts}
        getContactId={removeContactValorQualquer}
      />
    </div>
  );
}
