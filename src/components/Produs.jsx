
import poza from '../pictures/Pahar vin.png'
import Arome from './Arome';

import SoiVin from './SoiVin';

function Produs(props) {
    return <div className="container-produs">
        <h2>
            {props.product.name}
        </h2>
        <p>
            <span>Id Produs: <strong>{props.product.id}</strong> </span>
        </p>
        <img className="poza" src={poza}></img>

        <div>
            <h4>
                Pret <strong>{props.product.pret} $</strong>
            </h4>
            <h4>
            Tara origine <strong>{props.product.tara} </strong>
            </h4> 
            <SoiVin soi={props.product.soi}></SoiVin>
            <h4>
                Culoare <strong>{props.product.culoare} </strong>
            </h4>
            <Arome arome={props.product.arome}></Arome>




        </div>
    </div>
}

export default Produs;