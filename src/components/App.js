import React from 'react';
import '../css/App.css';
import Header from "./Header";
import Form from "./Form";
import {calcularIncrementoMarca, getDiffCurrentYears} from "../helpers";


class App extends React.Component {

  cotizarSeguro = (datos) => {
    console.log(datos);

    // los datos nos llegan del props enviado por el Form component
    const {marca, year, plan} = datos;

    // Algoritmo de calculo del seguro

    // 1. declarar un total con una base de 2000 $
    let total = 2000;

    // 2. obtener la diferencia de años desde el año actual
    const diffYears = getDiffCurrentYears(year);

    // 3. por cada año restar a la base el 3%
    const percentageDiscount = (diffYears * 3) / 100;
    console.log(`percentageDiscount: ${percentageDiscount}`);

    total -= percentageDiscount;
    console.log(`totalDiscount: ${total}`);

    // 4. Dependiendo de la marca (europeo, americano, asiatico) se aumenta el precio
    const incremento = calcularIncrementoMarca(marca);
    console.log(`incremento: ${incremento}`);

    // total
    total = total * incremento;
    console.log(`total: ${total}`);


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
