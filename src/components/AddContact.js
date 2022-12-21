import React from "react";

export class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = event => {
    event.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      return alert("Preenchimento dos Campos Obrigatório!");
    }
    this.props.addContactValorQualquer(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div>
        <h3 className="fw-normal">Adicionar Contato</h3>
        <form onSubmit={this.add}>
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
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
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
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <button className="btn btn-primary mt-3" type="submit">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
