import React from "react";
import data from "./data.json";
import Opciones from "./OpcionesPosibles";
import Historial from "./Historial";
import Swal from "sweetalert2";

class Principal extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      opciones: data,
      historial: [],
      eleccionAnterior: "",
    };
  }

  handleClickOpcion = (e) => {
    let seleccionAnterior =
      this.state.historial[this.state.historial.length - 1];

    if (e.target.id === "A") {
      if (seleccionAnterior === "A") {
        if (this.state.historial.length < 4) {
          this.state.historial.push("A");
        }

        this.setState({
          contador: this.state.contador + 2,
        });
      } else if (seleccionAnterior !== "A") {
        if (this.state.historial.length < 4) {
          this.state.historial.push("A");
        }
        this.setState({
          contador: this.state.contador + 1,
        });
      }
    }
    if (e.target.id === "B") {
      if (seleccionAnterior === "A") {
        if (this.state.historial.length < 4) {
          this.state.historial.push("B");
        }
        this.setState({
          contador: this.state.contador + 3,
        });
      } else if (seleccionAnterior === "B" || this.state.historial[0] !== "B") {
        if (this.state.historial.length < 4) {
          this.state.historial.push("B");
        }
        this.setState({
          contador: this.state.contador + 2,
        });
      }
    }
    if (
      this.state.opciones[this.state.contador].id === "5a" ||
      this.state.opciones[this.state.contador].id === "5b"
    ) {
      Swal.fire("Fin.");
      console.log("Fin");
      this.setState({
        contador: this.state.contador,
      });
    }
  };

  componentDidMount() {
    Swal.fire("Bienvenido a elige tu propia aventura");
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contador !== this.state.contador) {
      this.setState({
        eleccionAnterior: this.state.historial[this.state.historial.length - 1],
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia">
          {this.state.opciones[this.state.contador].historia}
        </h1>
        <Opciones
          handleClick={this.handleClickOpcion}
          listaOpciones={this.state.opciones}
          contador={this.state.contador}
          listaHistorial={this.state.historial}
        />
        <Historial
          historial={this.state.historial}
          opcionAnterior={this.state.eleccionAnterior}
        />
      </div>
    );
  }
}

export default Principal;
