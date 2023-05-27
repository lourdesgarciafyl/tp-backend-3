import { Form, Button} from "react-bootstrap";
import BloqueColores from "./BloqueColores";
import { useState } from "react";

const FormularioColores = () => {
    const [color, setColor] = useState(" #563d7c")
    const [colores, setColores] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setColores([...colores,color]);
        console.log(e.target)
      }

    const borrarColor = (nombreColor) => {
        let copiaArrayColores = colores.filter((itemColor) => itemColor !== nombreColor);
        setColores(copiaArrayColores)
    }  

    return(
    <section className="container" id="containerPrincipal">
        <h1 className="display-6 mb-0 text-center">Paleta de colores</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex flex-row justify-content-center mt-2">
        <Form.Control
        type="color"
        id="colorInput"
        defaultValue="#563d7c"
        onChange={(e) => setColor(e.target.value)}
        />
        <Form.Label className="pt-4 mt-4 ms-2" htmlFor="colorInput">Selecciona un color</Form.Label>
        <Button variant="primary" id="btnAgregar" type="submit" className="ms-3">Agregar</Button>
        </Form.Group>
        </Form>
        <BloqueColores colores={colores} borrarColor={borrarColor}></BloqueColores>
    </section>
    )
}

export default FormularioColores;