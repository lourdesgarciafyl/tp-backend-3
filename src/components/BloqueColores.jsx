import {Row} from "react-bootstrap"
import CardColor from "./CardColor";

const BloqueColores = ({colores, setColores}) => {

    return(
        <Row xs={2} md={4} className="g-4 mt-3">
            {colores.map((color) =>(
                <CardColor className="col-4" color={color} key={color.id} setColores={setColores}></CardColor>
            ))}
        </Row>
    )
}

export default BloqueColores;