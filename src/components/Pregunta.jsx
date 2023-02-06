import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";

const Pregunta = ({actualizarPregunta, guardarPresupuesto, guardarRestante}) => {
  const [cantidad, setCantidad] = useState(0);

  const [error, setError] = useState(false); 

  // funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //Validar
    if(cantidad < 1 || isNaN(cantidad)){
        setError(true);
        return;
    }

    //Si pasa la validacion
    setError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false)
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

    {error ? <Error mensaje="Cantidad no Válida"/> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  actualizarPregunta: PropTypes.func.isRequired,
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired
}
export default Pregunta;
