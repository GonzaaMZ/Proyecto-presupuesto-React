import { useState } from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import Error from "./Error";



const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

const agregarGasto = (e) => {
    e.preventDefault();


    // validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
        setError(true);
        return
    }

    // crear objeto gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }

    //TODO: CAPITULO 13

    // enviar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);

    // reset al form
    setNombre('');
    setCantidad(0);
}

    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="Ej. Comida"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
            <label>Cantidad Gasto</label>
            <input 
            type="number"
            className="u-full-width"
            placeholder="Ej. 200" 
            value={cantidad}
            onChange={e => setCantidad(parseInt(e.target.value, 10))}
            />
            </div>
            <input 
            type="submit"
            className="button-primary u-full-width"
            value="Agrega Gasto"
            />
        </form>
     );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

 
export default Formulario;