import {Card, Col} from "react-bootstrap"

const CardColor = () => {

    return (
        <Card>
        <Card.Img variant="top" src="holder.js/100px180" fluid/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
       </Card.Body>
       </Card>
    )
}

export default CardColor;