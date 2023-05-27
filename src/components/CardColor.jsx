import {Card, Col} from "react-bootstrap"

const CardColor = () => {

    return (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <button className="btn btn-danger">Eliminar</button>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default CardColor;