import {Card, Col} from "react-bootstrap"
import { XCircle } from "react-bootstrap-icons";

const CardColor = ({itemColor, borrarColor}) => {
    return (
        <Col>
          <Card>
          <div style={{background:itemColor}} className="fondoColor w-100" ></div>
            <Card.Body className="text-center">
              <Card.Title>{itemColor}</Card.Title>
              <button className="btn btn-danger rounded-5" onClick={()=>borrarColor(itemColor)}><XCircle className="text-white"/></button>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default CardColor;