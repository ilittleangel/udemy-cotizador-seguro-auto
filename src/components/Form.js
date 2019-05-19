import React from 'react';

class Form extends React.Component {

    // refs: para leer los valores de un formulario
    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();

    // en lugar de tener el metodo como handleOnSubmit_recogerEnviarDatos(e) y luego tener
    // que hacer el bind() en cada this.handleOnSubmit_recogerEnviarDatos.bind(this) ya que
    // estamos heradando de Component y React no sabe cual es la clase si no
    // haces bind(), en lugar de eso, convertimos el metodo en una arrow function
    handleOnSubmit_recogerEnviarDatos = (e) => {
        e.preventDefault(); // para que no se envien los datos del form a la url

        // 1. obtener los datos, con los refs
        // Hay que leer primero el plan, porque hay que elegir entre uno y otro,
        // ademas hay que hacerlo con elvis, para prevenir nulos, en caso de no
        // haber selecionado ningun todavia
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';

        // 2. crear objeto
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        };

        // 3. enviarlo al componente principal
        // le llega al componente padre, App, porque se lo pasamos mediante props
        this.props.cotizarSeguro(infoAuto);

        // 4. resetear el formulario (opcional) segun experiencia de usuario
        e.currentTarget.reset()
    };

    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.handleOnSubmit_recogerEnviarDatos}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.planBasicoRef}/> Básico
                    <input type="radio" name="plan" value="completo" ref={this.planCompletoRef}/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        )
    }
}

export default Form
