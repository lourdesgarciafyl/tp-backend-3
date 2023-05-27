import { Form, Button} from "react-bootstrap";
import BloqueColores from "./BloqueColores";

const FormularioColores = () => {

    return(
    <section className="container" id="containerPrincipal">
        <h1 className="display-6 mb-0 text-center">Paleta de colores</h1>

        <Form className="d-flex flex-row justify-content-center mt-2">
        <Form.Control
        type="color"
        id="colorInput"
        defaultValue="#563d7c"
        title="Choose your color"
        />
        <Form.Label className="pt-4 mt-4 ms-2" htmlFor="colorInput">Selecciona un color</Form.Label>
        <Button variant="primary" id="btnAgregar" type="submit" className="ms-3">Agregar</Button>
        </Form>
        <BloqueColores></BloqueColores>
    </section>
    )
}

export default FormularioColores;