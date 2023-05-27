import {Row} from "react-bootstrap"
import CardColor from "./CardColor";
const BloqueColores = () => {

    return(
        <Row xs={2} md={4} className="g-4 mt-3">
            <CardColor className="col-4"></CardColor>
        </Row>
    )
}

export default BloqueColores;