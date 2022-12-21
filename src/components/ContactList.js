import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = props => {
  const deleteContactValorQualquer = id => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map(contact => {
    return (
      <ContactCard
        contact={contact}
        clickValorQualquer={deleteContactValorQualquer}
        key={contact.id}
      />
    );
  });
  return (
    <div className="mt-5">
      <div>{renderContactList}</div>
    </div>
  );
};
