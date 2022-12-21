import React from "react";

export const ContactCard = props => {
  const { id, name, email } = props.contact;
  return (
    <div className="lh-sm d-flex border-bottom pb-3">
      <div></div>
      <div>
        <div className="fs-3">{name}</div>
        <div className="fw-light fs-5">{email}</div>
      </div>
      <i
        className="btn fs-5 align-self-end ms-auto bi-trash text-danger"
        onClick={() => props.clickValorQualquer(id)}></i>
    </div>
  );
};
