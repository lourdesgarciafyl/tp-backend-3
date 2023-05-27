import {Row} from "react-bootstrap"
import CardColor from "./CardColor";
const BloqueColores = ({colores, borrarColor}) => {

    return(
        <Row xs={2} md={4} className="g-4 mt-3">
            {colores.map((item,indice) =>(
                <CardColor className="col-4" itemColor={item} indiceColor={indice} borrarColor={borrarColor}></CardColor>
            ))}
        </Row>
    )
}

export default BloqueColores;