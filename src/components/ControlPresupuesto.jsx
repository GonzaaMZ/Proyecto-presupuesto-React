import { Fragment } from "react";
import PropTypes from 'prop-types';
import {revisarPresupuesto} from '../helpers';


const ControlPresupuesto = ({restante, presupuesto}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
     );
}

ControlPresupuesto.propTypes = {
    restante: PropTypes.number.isRequired,
    presupuesto: PropTypes.number.isRequired
}

 
export default ControlPresupuesto;