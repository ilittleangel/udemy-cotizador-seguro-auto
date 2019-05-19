import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <form className="cotizar-auto">

                <div className="campo">
                    <label>Marca</label>
                    <select name="marca">
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year">
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico"/> Basico
                    <input type="radio" name="plan" value="completo"/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>

            </form>
        )
    }
}

export default Form
