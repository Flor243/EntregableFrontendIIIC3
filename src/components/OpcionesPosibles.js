import React from "react";

class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <button id="A" onClick={this.props.handleClick} className="botones">
          A
        </button>
        <h2 className="opcion">
          {this.props.listaOpciones[this.props.contador].opciones.a}
        </h2>
        <button id="B" onClick={this.props.handleClick} className="botones">
          B
        </button>
        <h2 className="opcion">
          {this.props.listaOpciones[this.props.contador].opciones.b}
        </h2>
      </div>
    );
  }
}

export default Opciones;
