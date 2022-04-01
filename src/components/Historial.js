import React from "react";

class Historial extends React.Component {
  seleccionPrevia = () => {
    return this.props.historial.length - 1;
  };

  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.opcionAnterior}</h3>
        <h3>Historial completo de opciones elegidas: </h3>
        <ul>
          {this.props.historial.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Historial;
