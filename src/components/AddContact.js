import React from "react";

const AddContact = () => {
  return (
    <div>
      <h3 className="fw-normal">Adicionar Contato</h3>
      <form>
        <div>
          <label className="form-label" htmlFor="inputName">
            Nome
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Nome"
            id="inputName"
          />
        </div>
        <div>
          <label className="form-label mt-3" htmlFor="inputEmail">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Email"
            id="inputEmail"
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddContact;
