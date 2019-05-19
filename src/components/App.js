import React from 'react';
import '../css/App.css';
import Header from "./Header";
import Form from "./Form";

class App extends React.Component {

  cotizarSeguro = (datos) => {
    console.log(datos)
  };

  render() {
    return (
        <div className="contenedor">

          <Header title="Cotizador de seguros"/>

          <div className="contenedor-formulario">
            <Form cotizarSeguro={this.cotizarSeguro}/>
          </div>

        </div>
    )
  }
}

export default App;
