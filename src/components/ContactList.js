import React from "react";

const ContactList = props => {
  console.log(props);

  const renderContactList = props.contacts.map(contact => {
    return (
      <div className="lh-sm">
        <div>
          <div className="fs-3">{contact.name}</div>
          <div className="fw-light fs-5">{contact.email}</div>
        </div>
        <div className="text-end fs-5">
          <i className="bi-trash text-danger "></i>
        </div>
        <hr />
      </div>
    );
  });
  return (
    <div className="mt-5">
      <div>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
